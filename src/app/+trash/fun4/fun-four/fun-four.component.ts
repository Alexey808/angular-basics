import { Component, OnDestroy, OnInit } from '@angular/core';
import { IItem } from '../../helpers/default-data.service';
import { Fun4ApiService } from '../fun4-api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-fun-four',
  templateUrl: './fun-four.component.html',
  styleUrls: ['./fun-four.component.scss']
})
export class FunFourComponent implements OnInit, OnDestroy {
  items: IItem[] = [];
  subs$ = new Subject<void>();

  constructor(
    private apiService: Fun4ApiService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy() {
    this.subs$.next();
    this.subs$.complete();
  }

  private loadData() {
    this.apiService.getData().pipe(
      takeUntil(this.subs$)
    ).subscribe((data: IItem[]) => {
      this.items = data;
    });
  }
}
