import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestingMarbleService } from './testing-marble.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lib-testing-marble',
  templateUrl: './testing-marble.component.html',
  styleUrls: ['./testing-marble.component.scss']
})
export class TestingMarbleComponent implements OnInit, OnDestroy {
  subs$ = new Subject<void>();
  data;

  constructor(
    private service: TestingMarbleService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy() {
    this.subs$.next();
    this.subs$.complete();
  }

  private loadData() {
    this.service.getDataSimple()
      .pipe(takeUntil(this.subs$))
      .subscribe((data) => {
        this.data = data;
      });
  }
}
