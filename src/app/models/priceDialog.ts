export class PriceDialog {
  price: number;
  product: string;
  cartons: number;
  units: number;

  constructor(price: number, product: string, cartons: number, units: number) {
    this.price = price;
    this.product = product;
    this.cartons = cartons;
    this.units = units;
  }
}
