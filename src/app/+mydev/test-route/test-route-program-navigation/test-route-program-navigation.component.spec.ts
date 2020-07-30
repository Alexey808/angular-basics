import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRouteProgramNavigationComponent } from './test-route-program-navigation.component';

describe('TestRouteProgramNavigationComponent', () => {
  let component: TestRouteProgramNavigationComponent;
  let fixture: ComponentFixture<TestRouteProgramNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRouteProgramNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRouteProgramNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
