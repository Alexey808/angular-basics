import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunOneComponent } from './fun-one.component';

describe('FunOneComponent', () => {
  let component: FunOneComponent;
  let fixture: ComponentFixture<FunOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
