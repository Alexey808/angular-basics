import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject, throwError, timer } from 'rxjs';
import { debounce, delay, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { rejects } from 'assert';

interface IItem {
  id: number;
  value: string;
}

@Component({
  selector: 'app-test-async-stream',
  templateUrl: './test-async-stream.component.html',
  styleUrls: ['./test-async-stream.component.scss']
})
export class TestAsyncStreamComponent implements OnInit, OnDestroy {
  private subs$ = new Subject<void>();

  public itemId = null;
  public allowLoadItems = null;

  public time1 = 2000;
  public time2 = 3000;

  public items1 = [];
  public items2 = [];

  constructor() { }

  ngOnInit(): void {
    this.itemId = 1;

    this.getObservableAllowLoadItems()
      .pipe(
        switchMap((allow) => {
          if (allow) {
            return this.getObservableItemId()
              .pipe(
                tap((selectedItem) => {
                  this.itemId = selectedItem;
                }),
                switchMap(() => this.getObservableItems()),
                takeUntil(this.subs$),
              );

          } else {
            return of(null);
          }
        }),
        takeUntil(this.subs$)
      )
      .subscribe((items: IItem[] | null) => {
        if (items) {
          this.items1 = items.map((item) => ({
            ...item,
            bool: item.id === this.itemId
          }));
        }
      });


    try {
      this.getPromiseAllowLoadItems()
        .then((allowLoad) => {
          if (allowLoad) {
            return this.getPromiseSelectedItemId();
          } else {
            throw allowLoad;
          }
        })
        .then((selectedItemId) => {
          this.itemId = selectedItemId;
          return this.getPromiseItems();
        })
        .then((items: IItem[]) => {
          this.items2 = items.map((item) => ({
            ...item,
            bool: item.id === this.itemId
          }));
        });
    } catch (e) {
      return e;
    }


  }

  ngOnDestroy() {
    this.subs$.next();
    this.subs$.complete();
  }


  /*
  * Observable
  */
  private getObservableItems(): Observable<IItem[]> {
    return of([
      {id: 0, value: 'test-1'},
      {id: 1, value: 'test-2'},
      {id: 2, value: 'test-3'}
    ]);
  }

  private getObservableItemId(): Observable<number|null> {
    return of(this.itemId).pipe(
      delay(this.time1),
    );
  }

  private getObservableAllowLoadItems(): Observable<boolean|null> {
    return of(this.allowLoadItems).pipe(
      delay(this.time1),
      map(_ => this.allowLoadItems = true)
    );
  }


  /*
   * Promise
   */
  private getPromiseItems(): Promise<IItem[]> {
    return new Promise((res, rej) => {
      return res(
        [
          {id: 0, value: 'test1'},
          {id: 1, value: 'test2'},
          {id: 2, value: 'test3'}
        ]
      );
    });
  }

  private getPromiseSelectedItemId(): Promise<number|null> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.itemId);
      }, this.time2);
    });
  }

  private getPromiseAllowLoadItems(): Promise<boolean|null> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.allowLoadItems = true;
        res(this.allowLoadItems);
      }, this.time2);
    });
  }
}
