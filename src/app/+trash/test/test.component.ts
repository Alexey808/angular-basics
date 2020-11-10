import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  public amount = 13;
  public items = [];

  ngOnInit(): void {
    for (let i = 1; i <= this.amount ; i++) {
      this.items.push(i);
    }
  }

}
