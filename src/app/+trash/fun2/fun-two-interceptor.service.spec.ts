import { TestBed } from '@angular/core/testing';

import { FunTwoInterseptorService } from './fun-two-interseptor.service';

describe('FunTwoInterseptorService', () => {
  let service: FunTwoInterseptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunTwoInterseptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
