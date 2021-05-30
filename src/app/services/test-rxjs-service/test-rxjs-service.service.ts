import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Item {
  id: number;
  value: string;
}

const INIT_DATA: Item[] = [
  {id: 1, value: 'test-1'},
  {id: 2, value: 'test-2'},
  {id: 3, value: 'test-3'}
];

@Injectable({
  providedIn: 'root'
})
export class TestRxjsServiceService {
  private data: Observable<Item[]>;

  constructor() {
    this.loadData();
  }

  get dataSubject(): Observable<any> {
    return this.data;
  }

  loadData(): void {
    this.data = this.fakeApiLoadData();
  }

  updateItem(item) {
    this.fakeApiUpdateData(item);
  }

  fakeApiLoadData(): Observable<Item[]> {
    console.log('api - load data');
    return of(INIT_DATA);
  }

  fakeApiUpdateData(item): Observable<Item> {
    console.log('api - update data');
    // return of(INIT_DATA.map((x) => x.id === item.id ? item : x));
    return of(item);
  }
}
