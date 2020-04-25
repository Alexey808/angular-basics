import { TestBed } from '@angular/core/testing';

import { UnitTestService } from './unit-test.service';
import {UnitTestComponent} from './unit-test.component';
import {EMPTY, of} from 'rxjs';

describe('UnitTestService', () => {
  let service: UnitTestService;
  let component: UnitTestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitTestService);
    component = new UnitTestComponent( null, service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*
  * Тест метода сервиса, то что он был вызван.
  * callFake - фейковый вызов где возвращаем фейковое значение
  * toHaveBeenCalled - проверка что метод был вызван
  * */
  it('should call fetch when ngOnInit', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY;
    });

    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  /*
  * Тест метода сервиса, проверка что он возвращает результат
  * returnValue - подменяет возвращаемое значение
  * */
  it('should call fetch when ngOnInit', () => {
    const items = [1, 2, 3];
    spyOn(service, 'fetch').and.returnValue(of(items));

    component.ngOnInit();
    expect(component.items.length).toBe(items.length);
  });
});
