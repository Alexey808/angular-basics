import { Injectable } from '@angular/core';
import {of} from 'rxjs';

export interface Item {
  id: number;
  title: string;
}
@Injectable({
  providedIn: 'root'
})
export class TestResolverService {
  items: Item[] = [
    {title: 'Item 1', id: 1},
    {title: 'Item 2', id: 2},
    {title: 'Item 3', id: 3}
  ];

  getById(id) {
    return of(this.items.find(item => item.id === id));
  }
}
