import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-test-breakpoint-observer',
  templateUrl: './test-breakpoint-observer.component.html',
  styleUrls: ['./test-breakpoint-observer.component.scss']
})
export class TestBreakpointObserverComponent implements OnInit {
  bool = false;
  i = 0;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web,
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait,
      Breakpoints.WebPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletLandscape,
      Breakpoints.WebLandscape,
    ]).subscribe(result => {
      if (result.matches) {
        this.activateHandsetLayout(result);
      }
    });
  }

  ngOnInit(): void {}

  private activateHandsetLayout(breakPoints) {
    console.log(breakPoints);
  }

  onClick() {
    this.bool = !this.bool;
  }

  test() {
    console.log(this.i++);
  }
}
