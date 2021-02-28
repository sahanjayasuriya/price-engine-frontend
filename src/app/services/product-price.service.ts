import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {BaseService} from './base.service';

const PRODUCT_PRICE_URL = '/product/price/';

@Injectable({
  providedIn: 'root'
})
export class ProductPriceService extends BaseService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getProductPrices(productId: number): Observable<any> {
    return this.get(environment.apiUrl + PRODUCT_PRICE_URL + productId);
  }

  getProductPrice(productId: number, quantity: number): Observable<any> {
    return this.get(environment.apiUrl + PRODUCT_PRICE_URL + productId + '/' + quantity);
  }

}
