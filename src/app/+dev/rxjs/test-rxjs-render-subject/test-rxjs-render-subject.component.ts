import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-test-rxjs-render-subject',
  templateUrl: './test-rxjs-render-subject.component.html',
  styleUrls: ['./test-rxjs-render-subject.component.scss']
})
export class TestRxjsRenderSubjectComponent implements OnInit, OnDestroy {

  constructor() { }

  items$ = new Subject<any[]>();
  inputValues = [{name: 'name-1'}, {name: 'name-2'}, {name: 'name-3'}];

  ngOnInit(): void {
    this.items$.subscribe((x) => {
      console.log(x);
    });

    for (const item of this.inputValues) {
      //this.items$.next(item); // todo мешало
    }
  }

  ngOnDestroy(): void {
    // this.items$.unsubscribe();
  }
}
