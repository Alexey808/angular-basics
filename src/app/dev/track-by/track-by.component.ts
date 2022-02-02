import { Component } from '@angular/core';

interface IItem {
  id: number;
  value: string;
}

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.scss']
})
export class TrackByComponent {
  items: IItem[] = Array
    .from({length: 20})
    .map((_, i) => ({id: i, value: `item-${i}`}));

  trackItem(index, item) {
    console.log(index, item);
    return item ? item.id : index;
  }
}
