import { Injectable } from '@angular/core';
import { BehaviorSubject, merge, Observable, of, zip } from 'rxjs';
import { flatMap, map, mergeMap, tap } from 'rxjs/operators';

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

  fakeApiUpdateItem(item: Item) {
    console.log('api - update item', item);
    // return of(INIT_DATA.map((x) => x.id === item.id ? item : x));

    // return zip(this.data, of([item])).pipe(
    //   tap((x) => console.log('zip -> ', x)),
    //   map((x, b) => {
    //     console.log(x, b);
    //     return x;
    //   })
    // ).subscribe();

    return merge(this.data).pipe(
      map((items) => items.map((x) => x.id === item.id ? item : x) ),
    ).subscribe((data) => {
      this.data.next(data);
    });
  }

  fakeApiDeleteItem(id: ItemId): Observable<Item[]> {
    console.log('api - delete item - id: ', id);
    return of(INIT_DATA);
  }

  fakeApiCreateItem(item): Observable<Item[]> {
    console.log('api - create item - item: ', item);
    return of([...INIT_DATA, item]);
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
    this.fakeApiCreateItem(item);
  }

  public onUpdate(item: Item): void {
    this.fakeApiUpdateItem(item);
  }

  public onDelete(id: ItemId): void {
    this.fakeApiDeleteItem(id);
  }
}
