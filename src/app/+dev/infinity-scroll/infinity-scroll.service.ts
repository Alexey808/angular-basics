import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ITestItem {
  num: number;
}

@Injectable({
  providedIn: 'root'
})
export class InfinityScrollService {

  constructor() { }


  getTestItems(): Observable<ITestItem> {
    const item: ITestItem = { num: 0 };
    return of(item);
  }
}
