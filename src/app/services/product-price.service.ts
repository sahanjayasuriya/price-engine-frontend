import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {BaseService} from './base.service';
import {ProductPrice} from '../models/ProductPrice';

const PRODUCT_PRICE_URL = '/products/price';

@Injectable({
  providedIn: 'root'
})
export class ProductPriceService extends BaseService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getProductPrices(productId: number): Observable<ProductPrice[]> {
    return this.get(environment.apiUrl + PRODUCT_PRICE_URL + '?productId=' + productId);
  }

  getProductPrice(productId: number, quantity: number): Observable<ProductPrice> {
    return this.get(environment.apiUrl + PRODUCT_PRICE_URL + '?productId=' + productId + '&quantity=' + quantity);
  }

}
