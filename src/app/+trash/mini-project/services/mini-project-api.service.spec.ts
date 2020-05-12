import { TestBed } from '@angular/core/testing';

import { MiniProjectApiService } from './mini-project-api.service';

describe('MiniProjectApiService', () => {
  let service: MiniProjectApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniProjectApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
