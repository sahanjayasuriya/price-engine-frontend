import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Product} from '../models/product';

const PRODUCTS_URL = '/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  getProducts(): Observable<Product[]> {
    return this.get(environment.apiUrl + PRODUCTS_URL);
  }

}
