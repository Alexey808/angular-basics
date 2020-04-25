import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { bounceIn, pulse, zoomOut } from 'ng-animate';

@Component({
  selector: 'app-click-animate',
  templateUrl: './click-animate.component.html',
  styleUrls: ['./click-animate.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('* => start', useAnimation(bounceIn, {
        params: { timing: 0.5 }
      })),
      transition('start => done', useAnimation(zoomOut, {
        params: { timing: 0.5 }
      })),
    ]),
  ],
})
export class ClickAnimateComponent implements OnInit {
  items = [{id: 0, name: 'item-1'}, {id: 1, name: 'item-2'}, {id: 2, name: 'item-3'}];
  state: any;
  constructor() { }

  ngOnInit(): void {
    console.log('init ', this.state);
  }

  click() {
    // this.state = this.state === 'open' ? 'closed' : 'open';
    this.state = '';
    // this.state = this.state === 'test1' ? 'test2' : 'test1';
    this.state = 'test2';
    console.log(this.state);
    return this.state;
  }

  test(e) {
    console.log('e', e);
  }
}
