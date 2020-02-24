import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutItemsService {
  items = [{id: 1, title: 'item-1'}, {id: 2, title: 'item-2'}, {id: 3, title: 'item-3'}];
  constructor() { }

  findItemId(id: number) {
    return this.items.find((item) => item.id === id);
  }
}
