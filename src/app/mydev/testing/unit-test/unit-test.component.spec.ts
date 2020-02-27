import { UnitTestComponent } from './unit-test.component';
import {FormBuilder} from '@angular/forms';

describe('UnitTestComponent', () => {
  let component: UnitTestComponent;

  beforeEach(() => { // вызывается перед каждый тестом it-ом
    component = new UnitTestComponent(new FormBuilder());
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
});
