import { TestBed } from '@angular/core/testing';

import { RoutItemsService } from './rout-items.service';

describe('RoutItemsService', () => {
  let service: RoutItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
