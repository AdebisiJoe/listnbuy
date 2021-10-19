import { TestBed } from '@angular/core/testing';

import { ProductsAutoCompleteServiceService } from './products-auto-complete-service.service';

describe('ProductsAutoCompleteServiceService', () => {
  let service: ProductsAutoCompleteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsAutoCompleteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
