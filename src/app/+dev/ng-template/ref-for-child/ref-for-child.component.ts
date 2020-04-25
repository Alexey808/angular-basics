import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ref-for-child',
  templateUrl: './ref-for-child.component.html',
  styleUrls: ['./ref-for-child.component.scss']
})
export class RefForChildComponent implements OnInit {
  data1 = [];
  data2 = [];
  clickedTo = '';

  onClickTo = (name) => this.clickTo(name);

  constructor() { }

  ngOnInit(): void {
    this.data1 = [
      { id: 0, name: 'item-1', bool: true },
      { id: 1, name: 'item-2', bool: false },
      { id: 2, name: 'item-3', bool: false },
    ];
    this.data2 = [
      { id: 0, name: 'test-1', bool: true },
      { id: 1, name: 'test-2', bool: false },
      { id: 2, name: 'test-3', bool: false },
    ];
  }

  private clickTo(name) {
    console.log(name);
    this.clickedTo = name;
  }
}
