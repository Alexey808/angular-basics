import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRoutePage2Component } from './test-route-page2.component';

describe('TestRoutePage2Component', () => {
  let component: TestRoutePage2Component;
  let fixture: ComponentFixture<TestRoutePage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRoutePage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRoutePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
