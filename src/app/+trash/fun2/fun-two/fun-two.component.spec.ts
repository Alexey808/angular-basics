import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunTwoComponent } from './fun-two.component';

describe('FunTwoComponent', () => {
  let component: FunTwoComponent;
  let fixture: ComponentFixture<FunTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
