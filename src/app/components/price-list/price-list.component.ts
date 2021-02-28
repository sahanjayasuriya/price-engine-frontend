import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {ProductPrice} from '../../models/ProductPrice';
import {ProductPriceService} from '../../services/product-price.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  products: Product[] = [];
  dataSource: ProductPrice[];
  displayedColumns: string[] = ['units', 'price'];
  selectedProductId: number;
  selectedProduct: Product;

  constructor(private productService: ProductService, private productPriceService: ProductPriceService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getProducts().subscribe(result => {
      this.products = result;
    }, error => {
      console.log(error);
      this.snackBar.open('Error occurred (' + error.message + ')');
    });
  }

  loadProductPrices() {
    this.selectedProduct = this.products.find(product => product.id == this.selectedProductId);
    this.productPriceService.getProductPrices(this.selectedProductId).subscribe(result => {
      this.dataSource = result;
    }, error => {
      this.snackBar.open('Error occurred (' + error.message + ')');
    });
  }
}
