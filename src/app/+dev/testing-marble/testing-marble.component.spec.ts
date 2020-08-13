import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingMarbleComponent } from './testing-marble.component';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { TestingMarbleService } from './testing-marble.service';
import { AppComponent } from '../../app.component';
import { By } from '@angular/platform-browser';

describe('TestingMarbleComponent', () => {
  // let component: TestingMarbleComponent;
  // let fixture: ComponentFixture<TestingMarbleComponent>;
  let service: any; //: TestingMarbleService;

  beforeEach(async(() => {
    service = jasmine.createSpy('TestingMarbleService'); // 1 имитируем сервис
    service.getUsers = cold('a-b-c', { a: 'Mike', b: 'Flo', c: 'Rolf' }); // 2 создание холодной подписки

    TestBed.configureTestingModule({
      declarations: [ TestingMarbleComponent ],
      providers: [{provide: TestingMarbleService, useValue: service}]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // trigger change detection

    getTestScheduler().flush(); // flush the observable
    fixture.detectChanges(); // trigger change detection again

    const liElements = fixture.debugElement.queryAll(By.css('.user'));
    expect(liElements.length).toBe(3);

    expect(liElements[0].nativeElement.innerText).toBe('Mike');
    expect(liElements[1].nativeElement.innerText).toBe('Flo');
    expect(liElements[2].nativeElement.innerText).toBe('Rolf');
  });
});
