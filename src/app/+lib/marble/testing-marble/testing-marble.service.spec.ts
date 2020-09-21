import { TestBed } from '@angular/core/testing';

import { TestingMarbleService } from './testing-marble.service';

describe('TestingMarbleService', () => {
  let service: TestingMarbleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingMarbleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
