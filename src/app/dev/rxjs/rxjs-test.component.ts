// https://netbasal.com/creating-custom-operators-in-rxjs-32f052d69457

import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { valuesFilter } from './custom-pipe-operators/values-filter';
import { valueFilter } from './custom-pipe-operators/value-filter'

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
})
export class RxjsTestComponent implements OnInit, OnDestroy {
  unsub = new Subject<void>();

  constructor() { }

  ngOnDestroy() {
    this.unsub.next();
    this.unsub.complete();
  }

  ngOnInit(): void {
    of(1)
      .pipe(
        valueFilter(),
        takeUntil(this.unsub),
      ).subscribe((x) => console.log(x));

    of([1, null, 2, undefined, 3])
      .pipe(
        valuesFilter(),
        takeUntil(this.unsub),
      ).subscribe((x) => console.log(x));
  }
}
