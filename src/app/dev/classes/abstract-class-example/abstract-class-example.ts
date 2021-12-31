import { IData } from './abstract-class-example.service';
import { AbstractClassExampleLogService } from './abstract-class-example-log.service';

export abstract class AbstractClassExample {
  constructor(
    protected logService: AbstractClassExampleLogService
  ) {}

  protected _setValueThree(data: IData): IData {
    this.logService.log(3);
    return this.setValueFour({ ...data, valueThree: 'valueThree' });
  }

  protected abstract setValueFour(data: IData): IData;
}
