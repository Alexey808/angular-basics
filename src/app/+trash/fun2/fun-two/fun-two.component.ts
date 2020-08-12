import { Component, OnDestroy, OnInit } from '@angular/core';
import { FunTwoApiService, IItem } from '../fun-two-api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-fun-two',
  templateUrl: './fun-two.component.html',
  styleUrls: ['./fun-two.component.scss']
})
export class FunTwoComponent implements OnInit, OnDestroy {
  subs$ = new Subject<void>();
  data = [];

  constructor(
    private serviceApi: FunTwoApiService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subs$.next();
    this.subs$.complete();
  }

  private loadData() {
    this.serviceApi.getData().pipe(
      takeUntil(this.subs$),
    ).subscribe((data) => {
      this.data = data;
    });
  }
}
