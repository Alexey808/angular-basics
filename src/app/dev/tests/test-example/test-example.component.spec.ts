import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExampleComponent } from './test-example.component';
import { By } from '@angular/platform-browser';
import { take } from 'rxjs/operators';
import { of } from 'rxjs';

describe('TestExampleComponent', () => {
  let component: TestExampleComponent;
  let fixture: ComponentFixture<TestExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('', () => {
  //   spyOn(component, 'loadData');
  //   component['loadData']();
  //   expect(component['loadData']).toHaveBeenCalled();
  // });

  // Тестирование публичного метода без параметров и не возвращающего значение
  it('Public method testing', () => {
    spyOn(component, 'publicVoidMethod');
    component.publicVoidMethod();
    expect(component.publicVoidMethod).toHaveBeenCalled();
  });

  /* Тестирование приватного метода без параметров.
  По Возможности нужно измегать тестировани private свойств*/
  it('Private method testing', () => {
    spyOn(component, 'privateVoidMethod' as never);
    component['privateVoidMethod']();
    expect(component['privateVoidMethod']).toHaveBeenCalled();
  });

  /* Тестирование публичного метода который возвращает результат */
  // it('Testing a public method that returns a result', () => {
  //   const result: boolean = component.publicReturnMethod(); // нужно замокировать функцию publicReturnMethod
  //   expect(component).to;
  // });

  /* Тестирование публичного метода который принимает в себя аргументы */
  // it('Testing a public method that includes an argument', () => {
  //   spyOn(component, 'publicVoidMethodWithArgument');
  //   component.publicVoidMethodWithArgument(true);
  //   expect(component).toHaveBeenCalledWith(true);
  // });

  // it('should set initial sorting if skipReseting == false', () => {
  //   spyOn(component, 'setSortColumnName');
  //   component['setSortColumnNameInitial']();
  //   expect(component.setSortColumnName).toHaveBeenCalledWith(0);
  // });

  // it('', () => {});
  it('isTemplate', () => {
    const element: HTMLElement = fixture.debugElement.query(By.css('.container2')).nativeElement.firstChild;
    expect(element.textContent).toContain('template is false');
  });

  it('isTemplate$', () => {
    component.isTemplate = true;
    fixture.detectChanges();
    const element: HTMLElement = fixture.debugElement.query(By.css('.container2')).nativeElement.firstChild;
    expect(element.textContent).toContain('template is true');
  });

  it('тест геттера возвращающего обзёробл', () => {
    spyOnProperty(component, 'observable$', 'get').and.returnValue(of(true));
    component.observable$.pipe(take(1)).subscribe((x) => {
      expect(x).toBe(true);
    });
  });
});
