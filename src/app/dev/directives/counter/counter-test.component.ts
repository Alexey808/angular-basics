import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-test',
  templateUrl: './counter-test.component.html',
})
export class CounterTestComponent implements OnInit {
  items = Array.from({length: 10}).map((_, i) => `Item`);
  itemsTwo = Array.from({length: 12}).map((_, i) => `Item`);
  c;
  constructor() { }

  ngOnInit(): void {
  }

  setC($event: number) {
    this.c = $event;
  }
}
