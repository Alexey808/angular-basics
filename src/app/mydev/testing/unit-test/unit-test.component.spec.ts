import {UnitTestComponent} from './unit-test.component';
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

  /*
  * Дополнительные примеры тестов
  * */
describe('UnitTestComponent', () => {
  it('сравнение с использованием ===', () => {
    expect(1 + 2).toBe(3);
  });

  it('сравнение переменных и объектов (включая содержимое)', () => {
    const a = {x: 8, y: 9};
    const b = {x: 8, y: 9};
    expect(a).toEqual(b);
    expect(a).not.toBe(b); // a не является b
  });

  it('значение должно быть определено', () => {
    expect(window.document).toBeDefined();
  });

  it('значение должно быть null', () => {
    const a = null;
    expect(a).toBeNull();
  });

  it('значение должно быть верно', () => {
    expect(5 > 0).toBeTruthy();
  });

  it('значение должно быть не верно', () => {
    expect(5 < 0).toBeFalsy();
  });

  it('значение должно быть меньше чем', () => {
    expect(1 + 2).toBeLessThan(5);
  });

  it('значение должно быть больше чем', () => {
    expect(1 + 2).toBeGreaterThan(0);
  });

  it('значение должно быть близко к числу', () => {
    expect(1.2345).toBeCloseTo(1.2, 1);
  });

  it('значение должно соответствовать регулярному выражению', () => {
    expect('some string').toMatch(/string/);
  });

  it('значение должно содержать', () => {
    expect([1, 2, 3]).toContain(2);
    expect('some string').toContain('some');
  });

  it('должно быть вызвано исключение', () => {
    const myFunc = () => '';
    // component.myFunc();
    expect(myFunc).toThrow();
  });

});


/* Тестирование асинхронных функций */
describe('shirt async suite', () => {
  // переопределение дефолтного 5 секундного тайма для всех тестов
  const originDefaultTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
  });
  afterAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originDefaultTimeout;
  });


  it('should complete after 2 seconds timeout', (done) => {
    setTimeout(() => {
      done();
    }, 1000);
  });

  it('should fail with reason after timeout', (done) => {
    setTimeout(() => {
      done.fail('Всё сломалось!');
    }, 100);
  });
});



