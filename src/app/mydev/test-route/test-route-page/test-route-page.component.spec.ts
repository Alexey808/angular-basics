import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRoutePageComponent } from './test-route-page.component';

describe('TestRoutePageComponent', () => {
  let component: TestRoutePageComponent;
  let fixture: ComponentFixture<TestRoutePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRoutePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRoutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
