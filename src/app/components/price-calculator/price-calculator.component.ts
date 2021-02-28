import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {ProductPriceService} from '../../services/product-price.service';
import {MatDialog} from '@angular/material/dialog';
import {ProductPriceComponent} from '../product-price/product-price.component';
import {PriceDialog} from '../../models/priceDialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.scss']
})
export class PriceCalculatorComponent implements OnInit {

  formCalculate: FormGroup;
  products: Product[] = [];

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private productPriceService: ProductPriceService,
              private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.renderForm();
  }

  private getProducts() {
    this.productService.getProducts().subscribe(result => {
      this.products = result;
    }, error => {
      this.snackBar.open('Error occurred (' + error.message + ')');
    });
  }

  private renderForm() {
    this.formCalculate = this.formBuilder.group({
      product: [null, Validators.required],
      cartons: [0, [Validators.required, Validators.min(0)]],
      units: [0, [Validators.required, Validators.min(0)]],
    }, {validator: this.validateQuantity('cartons', 'units')});
  }

  calculatePrice() {
    const productId = this.formCalculate.controls.product.value;
    const cartons: number = this.formCalculate.controls.cartons.value;
    const units: number = this.formCalculate.controls.units.value;
    const quantity = cartons * this.products.find(product => product.id === productId).units + units;
    this.productPriceService.getProductPrice(productId, quantity).subscribe(result => {
      this.openPriceDialog(result.price, result.productName, cartons, units);
    }, error => {
      this.snackBar.open('Error occurred (' + error.message + ')');
    });
  }

  openPriceDialog(price: number, product: string, cartons: number, units: number) {
    this.dialog.open(ProductPriceComponent, {
      data: new PriceDialog(price, product, cartons, units)
    });
  }

  validateQuantity(cartonQuantity, unitQuantity) {
    return (control: AbstractControl): ValidationErrors | null => {
      const cartons = control.get(cartonQuantity).value;
      const units = control.get(unitQuantity).value;
      if (cartons === 0 && units === 0) {
        return {invalid: true};
      }
      return null;
    };
  }
}
