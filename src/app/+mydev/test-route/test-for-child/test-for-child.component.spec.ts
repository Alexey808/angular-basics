import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForChildComponent } from './test-for-child.component';

describe('TestForChildComponent', () => {
  let component: TestForChildComponent;
  let fixture: ComponentFixture<TestForChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestForChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestForChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
