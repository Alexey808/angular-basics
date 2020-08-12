import { TestBed } from '@angular/core/testing';

import { FunTwoApiService } from './fun-two-api.service';

describe('FunTwoApiService', () => {
  let service: FunTwoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunTwoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
