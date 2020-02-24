import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRoutePage2ChildComponent } from './test-route-page2-child.component';

describe('TestRoutePage2ChildComponent', () => {
  let component: TestRoutePage2ChildComponent;
  let fixture: ComponentFixture<TestRoutePage2ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRoutePage2ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRoutePage2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
