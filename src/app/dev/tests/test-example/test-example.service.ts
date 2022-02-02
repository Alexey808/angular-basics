import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IItem {
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestExampleService {

  constructor() { }

  loadData(): Observable<IItem[]> {
    return of([{value: 'test-1'}, {value: 'test-2'}, {value: 'test-3'}]);
  }
}
