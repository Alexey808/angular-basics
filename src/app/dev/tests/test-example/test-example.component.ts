import { Component, OnDestroy, OnInit } from '@angular/core';
import { IItem, TestExampleService } from './test-example.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-test-example',
  templateUrl: './test-example.component.html',
  styleUrls: ['./test-example.component.scss']
})
export class TestExampleComponent implements OnInit, OnDestroy {
  data: IItem[] = [];
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private service: TestExampleService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadData(): void {
    this.service.loadData().pipe(
      takeUntil(this.destroy$),
    ).subscribe((data: IItem[]) => {
      this.data = data;
    });
  }

  public method1(): void {}
  private method2(): void {}

}
