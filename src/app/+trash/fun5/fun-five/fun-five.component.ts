import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from '../../../core/default-data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-fun-five',
  templateUrl: './fun-five.component.html',
  styleUrls: ['./fun-five.component.scss']
})
export class FunFiveComponent implements OnInit, OnDestroy {
  items: IItem[] = [];
  subs$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy() {
    this.subs$.next();
    this.subs$.complete();
  }

  private loadData() {
    this.route.data.pipe(
      takeUntil(this.subs$),
    ).subscribe((data) => {
      console.log(data);
      debugger
        // this.items = data;
    });
  }
}
