import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingMarbleComponent } from './testing-marble.component';

describe('TestingMarbleComponent', () => {
  let component: TestingMarbleComponent;
  let fixture: ComponentFixture<TestingMarbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingMarbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingMarbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
