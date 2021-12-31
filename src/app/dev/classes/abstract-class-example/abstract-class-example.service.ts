import { Injectable } from '@angular/core';
import { AbstractClassExample } from './abstract-class-example';
import { AbstractClassExampleLogService } from './abstract-class-example-log.service';

export interface IData {
  valueOne: string | null;
  valueTwo: string | null;
  valueThree?: string;
  valueFour: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AbstractClassExampleService extends AbstractClassExample {

  constructor(
    protected logService: AbstractClassExampleLogService
  ) {
    super(
      logService
    );
  }

  public setValue(valueOne: IData): IData {
    console.log(2);
    return super._setValueThree({ ...valueOne, valueTwo: 'valueTwo' });
  }

  public setValueFour(data: IData): IData {
    console.log(4);
    return { ...data, valueFour: 'valueFour' };
  }
}
