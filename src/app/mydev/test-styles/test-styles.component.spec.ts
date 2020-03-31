import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStylesComponent } from './test-styles.component';

describe('TestStylesComponent', () => {
  let component: TestStylesComponent;
  let fixture: ComponentFixture<TestStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
