// https://netbasal.com/creating-custom-operators-in-rxjs-32f052d69457

import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { valuesFilter } from './custom-pipe-operators/values-filter';
import { valueFilter } from './custom-pipe-operators/value-filter'

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
})
export class RxjsTestComponent implements OnInit, OnDestroy {
  unsub$ = new Subject<void>();
  behaviourSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('init_value');

  constructor() { }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

  ngOnInit(): void {
    this.testCustomPipe();
    this.testBehaviourSubject();
  }

  private testCustomPipe(): void {
    of(1)
      .pipe(
        valueFilter(),
        takeUntil(this.unsub$),
      ).subscribe((x) => console.log(x));

    of([1, null, 2, undefined, 3])
      .pipe(
        valuesFilter(),
        takeUntil(this.unsub$),
      ).subscribe((x) => console.log(x));
  }

  private testBehaviourSubject() {
    const value1: string = this.behaviourSubject$.getValue();
    console.log('value1 -> ', value1);

    this.behaviourSubject$.asObservable().pipe(
      take(1),
    ).subscribe((value2: string) => console.log('value2 -> ', value2));
  }
}
