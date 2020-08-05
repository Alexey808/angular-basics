import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FunOneApiService } from '../fun-one-api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-fun-one',
  templateUrl: './fun-one.component.html',
  styleUrls: ['./fun-one.component.scss']
})
export class FunOneComponent implements OnInit, OnDestroy {
  private subs = new Subject<void>();
  public data;

  constructor(
    private activatedRoute: ActivatedRoute,
    private funOneApiService: FunOneApiService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(takeUntil(this.subs))
      .subscribe((data) => {
        this.data = data.dataResolve;
        console.log('start component -> ', data);
      });

    // this.funOneApiService.getData()
    //   .pipe(takeUntil(this.subs))
    //   .subscribe((data) => {
    //     this.data = data;
    //     console.log('start component -> ', data);
    //   });
  }

  ngOnDestroy(): void {
    this.subs.next();
    this.subs.complete();
  }

}
