import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-track-by-fn',
  templateUrl: './ng-for-track-by-fn.component.html',
  styleUrls: ['./ng-for-track-by-fn.component.scss']
})
export class NgForTrackByFnComponent implements OnInit {
  items = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { id: 0, name: 'item-1' },
      { id: 1, name: 'item-2' },
      { id: 2, name: 'item-3' },
      { id: 3, name: 'item-4' },
      { id: 4, name: 'item-5' },
    ];
  }

  trackByFn(index, item) {
    return index; // or item.id
  }


  add() {
    this.items.push({id: 5, name: 'test'});
  }

  remove(b) {
    this.items = this.items.filter((a) => a.id !== b.id);
  }
}
