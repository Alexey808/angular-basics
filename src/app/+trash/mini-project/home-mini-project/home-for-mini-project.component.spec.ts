import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForMiniProjectComponent } from './home-for-mini-project.component';

describe('HomeForMiniProjectComponent', () => {
  let component: HomeForMiniProjectComponent;
  let fixture: ComponentFixture<HomeForMiniProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeForMiniProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeForMiniProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
