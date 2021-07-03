import { Component, OnInit } from '@angular/core';
import { forkJoin, from, merge, of, zip } from 'rxjs';
import { map, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-test-rxjs',
  templateUrl: './test-rxjs.component.html',
})
export class TestRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.unifying(); // объединяющие
  }


  private unifying() {

    /**
     * zip, concat
     */
    const a1$ = of([{id: 4}, {id: 2}]);
    const a2$ = of([{id: 1}]);
    const a3$ = of([{id: 3}]);

    zip(a1$, a2$, a3$)
      .pipe(
        map(res => [].concat(...res)),
        map(res => res.sort((a, b) => a.id - b.id))
      )
      .subscribe(res => console.log(res));
      /*
      0: {id: 1}
      1: {id: 2}
      2: {id: 3}
      3: {id: 4}
      */

    /**
     * forkJoin, map
     */
    const b1$ = of([{id: 2}, {id: 1}]);
    const b2$ = of([{id: 3}]);

    forkJoin([b1$, b2$]).pipe(
      map(([b1, b2]) => [...b1, ...b2]),
      map(res => res.sort((a, b) => a.id - b.id))
    ).subscribe((res) => {
      console.log(res);
    });
    /*
    0: {id: 1}
    1: {id: 2}
    2: {id: 3}
    */

    /**
     * merge, reduce, map
     */
    const c1$ = from([{id: 2}, {id: 1}]);
    const c2$ = from([{id: 3}]);

    merge(c1$, c2$).pipe(
      reduce((result, value) => {
        return [...result, value];
      }, []),
      map(res => res.sort((a, b) => a.id - b.id))
    ).subscribe((res) => console.log(res));
    /*
    0: {id: 1}
    1: {id: 2}
    2: {id: 3}
    */
  }
}
