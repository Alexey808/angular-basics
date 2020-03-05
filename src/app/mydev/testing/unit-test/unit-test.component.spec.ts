import { UnitTestComponent } from './unit-test.component';
import {FormBuilder} from '@angular/forms';
import {TestBed} from '@angular/core/testing';
import {UnitTestService} from './unit-test.service';
import {of, throwError} from 'rxjs';

describe('UnitTestComponent', () => {
  let component: UnitTestComponent;
  let service: UnitTestService;
  beforeEach(() => { // вызывается перед каждый тестом it-ом
    service = TestBed.inject(UnitTestService);
    component = new UnitTestComponent(new FormBuilder(), service);
  });
  beforeAll(() => {}); // вызывается перед всеми "it"
  afterEach(() => {}); // вызывается после завершения каждого "it"
  afterAll(() => {}); // вызывается после завершения всех "it"

  it('should increment counter by -1', () => {
    component.decrement();
    expect(component.counter).toBe(-1);
  });

  it('should increment counter by 1', () => {
    component.increment();
    expect(component.counter).toBe(1);
  });

  /* Тестирование EventEmitter */
  it('should increment value by event emitter', () => {
    let result = null;
    component.counterEmitter.subscribe(v => result = v);
    component.increment();
    expect(result).toBe(1);
  });

  /* Тестирование формы | toBeTruthy - если равно true */
  it('should create form with 2 controls', () => {
    expect(component.form.contains('login')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  /* Тестирование валидации формы | toBeTruthy - если равно false*/
  it('should mark login as invalid if empty value', () => {
    const control = component.form.get('login');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  /* Тестирование добавление сущности, если всё успешно */
  it('should add new item', () => {
    const item = {title: 'test'};
    const spy = spyOn(service, 'create').and.returnValue(of(item));

    component.add(item.title);

    expect(spy).toHaveBeenCalled();
    expect(component.items.includes(item)).toBeTruthy();
  });

  /* Тестирование добавление сущности, если не успешно */
  it('not should add new item', () => {
    const error = 'Error message';
    spyOn(service, 'create').and.returnValue(throwError(error));

    component.add('Item title');

    expect(component.message).toBe(error);
  });
});
