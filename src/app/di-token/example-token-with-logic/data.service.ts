import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Item {
  id: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getItem(id): Observable<Item> {
    return of({id, value: `value-${id}`});
  }
}
