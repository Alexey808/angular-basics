import { Injectable } from '@angular/core';
import { BehaviorSubject, concat, forkJoin, from, merge, Observable, of, zip } from 'rxjs';
import { delay, flatMap, map, mergeMap, reduce, tap } from 'rxjs/operators';

export interface Item {
  id: number;
  value: string;
}

export type ItemId = Pick<Item, 'id'>;

const INIT_DATA: Item[] = [
  {id: 1, value: 'test-1'},
  {id: 2, value: 'test-2'},
  {id: 3, value: 'test-3'}
];

@Injectable({
  providedIn: 'root'
})
export class TestRxjsServiceService {
  private data = new BehaviorSubject<Item[]>([]);

  constructor() {
    this.loadData();
  }

  /**
   * Fake API Service
   */

  fakeApiLoadData(): Observable<Item[]> {
    console.log('api - load data');
    return of(INIT_DATA);
  }

  /**
   * Local service
   */

  public get dataSubject(): Observable<Item[]> {
    return this.data.asObservable();
  }

  private loadData(): void {
    this.fakeApiLoadData().subscribe((data) => {
      this.data.next(data);
    });
  }



  public onCreate(item: Item): void {
    // this.fakeApiCreateItem(item);
    forkJoin([this.dataSubject, of(item)]).pipe(
      map(([items, newItem]) => [...items, newItem]),
    ).subscribe((items) => {
      console.log('items -> ', items);
    });


  }

  public onUpdate(item: Item) {
    // console.log('api - update item', item);
    // // return of(INIT_DATA.map((x) => x.id === item.id ? item : x));
    //
    // // return zip(this.data, of([item])).pipe(
    // //   tap((x) => console.log('zip -> ', x)),
    // //   map((x, b) => {
    // //     console.log(x, b);
    // //     return x;
    // //   })
    // // ).subscribe();
    //
    // return merge(this.data).pipe(
    //   map((items) => items.map((x) => x.id === item.id ? item : x) ),
    // ).subscribe((data) => {
    //   this.data.next(data);
    // });
  }

  public onDelete(id: ItemId): void {
    // this.fakeApiDeleteItem(id);
  }
}
