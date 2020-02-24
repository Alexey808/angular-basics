import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRoutePage1Component } from './test-route-page1.component';

describe('TestRoutePage1Component', () => {
  let component: TestRoutePage1Component;
  let fixture: ComponentFixture<TestRoutePage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRoutePage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRoutePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
