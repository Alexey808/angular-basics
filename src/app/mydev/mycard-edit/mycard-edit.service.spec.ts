import { TestBed } from '@angular/core/testing';

import { MycardEditService } from './mycard-edit.service';

describe('MycardEditService', () => {
  let service: MycardEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycardEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
