import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PriceDialog} from '../../models/priceDialog';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss']
})
export class ProductPriceComponent implements OnInit {

  quantity = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: PriceDialog) {
  }

  ngOnInit(): void {
    this.getQuantity(this.data.cartons, this.data.units);
  }

  private getQuantity(cartons: number, units: number) {
    if (cartons > 0) {
      if (cartons === 1) {
        this.quantity += cartons + ' carton';
      } else {
        this.quantity += cartons + ' cartons';
      }
    }

    if (cartons > 0 && units > 0) {
      this.quantity += ' and ';
    }

    if (units > 0) {
      if (units === 1) {
        this.quantity += units + ' unit';
      } else {
        this.quantity += units + ' units';
      }
    }
  }

}
