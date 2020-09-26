import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.scss']
})
export class NgContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public get items() {
    return [
      { id: 0, title: 'title-1', text: 'text-1'},
      { id: 1, title: 'title-2', text: 'text-2'},
      { id: 2, title: 'title-3', text: 'text-3'},
    ];
  }

  test(item) {
    console.log(item);
  }
}
