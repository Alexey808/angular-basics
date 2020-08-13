import { TestBed } from '@angular/core/testing';

import { TestingMarbleService } from './testing-marble.service';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { AppComponent } from '../../app.component';
import { By } from '@angular/platform-browser';

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
