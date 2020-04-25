import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';
import {bounce, bounceIn, pulse, shake, zoomIn, zoomOut} from 'ng-animate';

const an = [
  // void => *
  transition(':enter', useAnimation(bounceIn, {
    params: { timing: 0.5 }
  })),
  // * => void
  transition(':leave', useAnimation(zoomOut, {
    params: { timing: 0.5 }
  })),
  // transition('* <=> *', useAnimation(bounceIn, {
  //   params: { timing: 0.5 }
  // })),
];

const pulseAnimate = [
  transition('* => true', [
    useAnimation(pulse, {
      params: { timing: 0.5 }
    })
  ])
];

@Component({
  selector: 'app-test-ng-animate',
  templateUrl: './test-ng-animate.component.html',
  styleUrls: ['./test-ng-animate.component.scss'],
  animations: [
    trigger('mybounce', an),
    trigger('pulseTrigger', pulseAnimate),
  ],
})
export class TestNgAnimateComponent implements OnInit {
  bool = true;
  items = [{num: 1, checked: false}, {num: 2, checked: true}, {num: 3, checked: false}];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.bool = !this.bool;
  }

  changeChecked(item) {
    const updateItems = this.items.map((x) => {
      x.checked = item.num === x.num;
      return x;
    });
    this.items = updateItems;
  }
}
