import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExampleComponent } from './test-example.component';

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
  it('method1', () => {
    spyOn(component, 'method1');
    component.method1();
    expect(component.method1).toHaveBeenCalled();
  });

  // Тестирование приватного метода без параметров
  it('method2', () => {
    spyOn(component, 'method2');
    component['method2']();
    expect(component['method2']).toHaveBeenCalled();
  });

  // it('should set initial sorting if skipReseting == false', () => {
  //   spyOn(component, 'setSortColumnName');
  //   component['setSortColumnNameInitial']();
  //   expect(component.setSortColumnName).toHaveBeenCalledWith(0);
  // });
});
