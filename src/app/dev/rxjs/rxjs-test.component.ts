// https://netbasal.com/creating-custom-operators-in-rxjs-32f052d69457

import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin, from, interval, Observable, of, Subject } from 'rxjs';
import { delay, map, mergeAll, mergeMap, switchMap, take, takeUntil } from 'rxjs/operators';
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
    // this.testCustomPipe();
    // this.testBehaviourSubject();
    // this.testForkJoin();
    // this.testCombineLatest();
    // this.testCombineLatest();
    // this.testForkJoin();
    this.testMergeMap();
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

  // private testForkJoin(): void {
  //   const data1$: Observable<string> = of('test-1000').pipe(
  //     delay(0),
  //   );
  //
  //   const data2$: Observable<string> = of('test-2000').pipe(
  //     delay(4000),
  //   );
  //
  //   forkJoin([data1$, data2$]).pipe(
  //     map(([data1, data2]: [string, string]) => [data1, data2])
  //   ).subscribe((data: string[]) => console.log(data));
  // }
  //
  // private testCombineLatest(): void {
  //   const data1$: Observable<string> = of('test-2000').pipe(
  //     // delay(0),
  //   );
  //
  //   const data2$: Observable<string> = of('test-4000').pipe(
  //     delay(4000),
  //   );
  //
  //   combineLatest([data1$, data2$]).pipe(
  //     map(([data1, data2]: [string, string]) => [data1, data2])
  //   ).subscribe((data: string[]) => console.log(data));
  // }

  testCombineLatest(): void {
    const obs1$ = interval(1000).pipe(take(1));
    const obs2$ = interval(1000).pipe(take(2));
    combineLatest([obs1$, obs2$]).pipe(take(2)).subscribe((x) => console.log(x));

  }

  testForkJoin(): void {
    const obs1$ = interval(1000).pipe(take(1));
    const obs2$ = interval(1000).pipe(take(2));
    forkJoin([obs1$, obs2$]).pipe(take(2)).subscribe((x) => console.log(x));
  }

  testMergeMap(): void {
    const getData = (param) => {
      return of(`retrieved new data with param ${param}`).pipe(delay(1000))
    };

    // from([1, 2, 3, 4]).pipe(
    //   mergeMap(param => getData(param))
    //   // switchMap(param => getData(param))
    // ).subscribe(val => console.log(val));



    from([1, 2, 3, 4]).pipe(
      map(param => getData(param)),
      mergeAll()
    ).subscribe(val => console.log(val));
  }

}
