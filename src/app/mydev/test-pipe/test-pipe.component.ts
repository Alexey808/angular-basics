import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.scss']
})
export class TestPipeComponent implements OnInit {
  num = Math.E;
  str = 'test';
  date = new Date();
  float = 0.42;
  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  };

  object: {[key: number]: string} = {2: 'foo', 1: 'bar'};

  constructor() { }

  ngOnInit(): void {
  }

}
