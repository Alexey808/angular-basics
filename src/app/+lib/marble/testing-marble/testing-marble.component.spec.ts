import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingMarbleComponent } from './testing-marble.component';
import { TestingMarbleService } from './testing-marble.service';
import { of } from 'rxjs';

describe('TestingMarbleComponent', () => {
  let component: TestingMarbleComponent;
  let fixture: ComponentFixture<TestingMarbleComponent>;
  let service: any; // 1

  beforeEach(async(() => {
    // service = jasmine.createSpy('TestingMarbleService'); // 2
    // service = new TestingMarbleService();
    service = jasmine.createSpyObj('TestingMarbleService', ['getDataSimple']);

    TestBed.configureTestingModule({
      declarations: [ TestingMarbleComponent ],
      providers: [ {provide: TestingMarbleService, useValue: service} ], // 3
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingMarbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // 4
  // it('should create', () => {
  //   service.getDataSimple().subscribe((result) => {
  //     console.log('result ---> ', result);
  //     expect(result.length).toBeGreaterThan(0);
  //   });
  // });

});

/*
* https://angular.io/guide/testing-services
* https://habr.com/ru/post/349380/
* */
