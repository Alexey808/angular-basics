import { Component, OnInit } from '@angular/core';
import { TestJsonplaceholderApiService } from './test-jsonplaceholder-api.service';
import { auditTime, debounceTime, delay, switchMap, take, tap, timeout } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, timer } from 'rxjs';
import { time } from 'jasmine-marbles';

@Component({
  selector: 'app-test-jsonplaceholder-api',
  templateUrl: './test-jsonplaceholder-api.component.html',
  styleUrls: ['./test-jsonplaceholder-api.component.scss']
})
export class TestJsonplaceholderApiComponent implements OnInit {
  data$: BehaviorSubject<any | null> = new BehaviorSubject<any>(null);
  constructor(
    private testApiService: TestJsonplaceholderApiService,
  ) { }

  ngOnInit(): void {
  }

  load(): void {
    this.testApiService.getItem(1).pipe(

      tap(() => this.load2()),
      switchMap(() => this.testApiService.getItem(2)),
      delay(1000),
      take(1),
    ).subscribe((data) => {
      console.log('subs1 -> ', data);
    });
  }

  load2(): void {
    this.testApiService.getItem(3).pipe(
      delay(1000),
      take(1),
    ).subscribe((data) => {
      console.log('subs2 -> ', data);
    });
  }
}
