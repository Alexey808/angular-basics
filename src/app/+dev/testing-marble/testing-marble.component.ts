import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestingMarbleService } from './testing-marble.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-testing-marble',
  templateUrl: './testing-marble.component.html',
  styleUrls: ['./testing-marble.component.scss']
})
export class TestingMarbleComponent implements OnInit, OnDestroy {
  data;
  subs$ = new Subject<void>();

  constructor(
    private service: TestingMarbleService,
  ) { }

  ngOnInit(): void {
    this.service.getUsers.pipe(
      takeUntil(this.subs$),
    ).subscribe((data) => {
      this.data = data;
    });
  }

  ngOnDestroy() {
    this.subs$.next();
    this.subs$.complete();
  }
}
