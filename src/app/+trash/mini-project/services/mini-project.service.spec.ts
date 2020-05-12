import { TestBed } from '@angular/core/testing';

import { MiniProjectService } from './mini-project.service';

describe('MiniProjectService', () => {
  let service: MiniProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
