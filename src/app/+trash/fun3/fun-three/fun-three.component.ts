import { Component, OnDestroy, OnInit } from '@angular/core';
import { Fun3ApiService, IItem } from '../fun3-api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-fun-three',
  templateUrl: './fun-three.component.html',
  styleUrls: ['./fun-three.component.scss']
})
export class FunThreeComponent implements OnInit, OnDestroy {
  private subs$ = new Subject<void>();
  public data: IItem[];
  public data2: IItem[];
  public dataAll: IItem[];

  constructor(
    private apiService: Fun3ApiService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy() {
    this.subs$.next();
    this.subs$.complete();
  }

  private loadData() {
    // this.apiService.getData1().pipe(
    //   takeUntil(this.subs$)
    // ).subscribe((data) => {
    //   this.data = data;
    // });
    //
    // this.apiService.getData2().pipe(
    //   takeUntil(this.subs$)
    // ).subscribe((data) => {
    //   this.data2 = data;
    // });

    this.apiService.getDataAll().pipe(
      takeUntil(this.subs$)
    ).subscribe(([data1, data2]) => {
      this.dataAll = [...data1, ...data2];
    });
  }
}
