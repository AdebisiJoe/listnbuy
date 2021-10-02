import { TestBed } from '@angular/core/testing';

import { GeneralmarketService } from './generalmarket.service';

describe('GeneralmarketService', () => {
  let service: GeneralmarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralmarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
