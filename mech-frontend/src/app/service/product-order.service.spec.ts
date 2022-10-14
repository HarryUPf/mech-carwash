import { TestBed, inject } from '@angular/core/testing';

import { ProductOrderService } from './product-order.service';

describe('ProductOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductOrderService]
    });
  });

  it('should be created', inject([ProductOrderService], (service: ProductOrderService) => {
    expect(service).toBeTruthy();
  }));
});
