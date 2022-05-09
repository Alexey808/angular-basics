import { Directive, Injectable, Input } from '@angular/core';


@Injectable()
export class CounterService {
  private _number: number = 0;
  private _maxNumber: number = 0;

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }

  set maxNumber(value: number) {
    this._maxNumber = value;
  }

  get isIncrement(): boolean {
    return this._number <= this._maxNumber;
  }

  get isReset(): boolean {
    return this._number > this._maxNumber;
  }

  increment(): void {
    this.number += 1;
  }

  reset(): void {
    this.number = 0;
  }
}


@Directive({
  selector: '[appCounter]'
})
export class CounterDirective {
  @Input() set volume(length: number) {
    this.service.maxNumber = length;
  }

  constructor(
    private service: CounterService,
  ) {}
}
