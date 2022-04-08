import { Component, OnDestroy, OnInit } from '@angular/core';
import { IItem, TestExampleService } from './test-example.service';
import { takeUntil } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-test-example',
  templateUrl: './test-example.component.html',
  styleUrls: ['./test-example.component.scss']
})
export class TestExampleComponent implements OnInit, OnDestroy {
  data: IItem[] = [];
  destroy$: Subject<void> = new Subject<void>();


  myPrivatValue: string | null = null;
  myPublicValue: string | null = null;

  isTemplate = false;
  isTemplate$ = of(false);

  get observable$(): Observable<boolean> {
    return of(false);
  }

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

  /**/
  public publicVoidMethod(): void {}
  private privateVoidMethod(): void {}
  public publicReturnMethod(): boolean { return true; }
  public publicVoidMethodWithArgument(arg: boolean): void {}
}
