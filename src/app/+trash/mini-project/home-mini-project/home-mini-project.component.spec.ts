import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMiniProjectComponent } from './home-mini-project.component';

describe('HomeForMiniProjectComponent', () => {
  let component: HomeMiniProjectComponent;
  let fixture: ComponentFixture<HomeMiniProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMiniProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMiniProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
