import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestErrorPageComponent } from './test-error-page.component';

describe('TestErrorPageComponent', () => {
  let component: TestErrorPageComponent;
  let fixture: ComponentFixture<TestErrorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestErrorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
