import { TestBed } from '@angular/core/testing';

import { ProductPriceService } from './product-price.service';

describe('ProductPriceServiceService', () => {
  let service: ProductPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
