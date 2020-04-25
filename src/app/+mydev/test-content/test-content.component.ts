import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.scss']
})
export class TestContentComponent implements OnInit {
  items = [{name: 'test-1'}, {name: 'test-2'}, {name: 'test-3'}];
  items2 = [{name: 'test-11'}, {name: 'test-22'}, {name: 'test-33'}];
  constructor() { }

  ngOnInit(): void {
  }

}
