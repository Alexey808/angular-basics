import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutItemComponent } from './rout-item.component';

describe('RoutItemComponent', () => {
  let component: RoutItemComponent;
  let fixture: ComponentFixture<RoutItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
