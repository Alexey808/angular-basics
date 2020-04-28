import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForTrackByFnComponent } from './ng-for-track-by-fn.component';

describe('NgForTrackByFnComponent', () => {
  let component: NgForTrackByFnComponent;
  let fixture: ComponentFixture<NgForTrackByFnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForTrackByFnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForTrackByFnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
