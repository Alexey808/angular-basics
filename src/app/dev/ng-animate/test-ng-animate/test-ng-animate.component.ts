import { Component, OnInit } from '@angular/core';
import {state, style, transition, trigger, useAnimation} from '@angular/animations';
import {bounce, bounceIn, pulse, shake, zoomIn, zoomOut} from 'ng-animate';

@Component({
  selector: 'app-test-ng-animate',
  templateUrl: './test-ng-animate.component.html',
  styleUrls: ['./test-ng-animate.component.scss'],
  animations: [
    trigger('mybounce', [
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
    ])
  ],
})
export class TestNgAnimateComponent implements OnInit {
  bool = true;


  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.bool = !this.bool;
  }
}
