import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewInit {
  @ViewChildren('dataRef') public dataRef;
  // @ViewChild('defaultElementRef', { read: any, descendants: true });

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this);
  }

  onTest() {

  }
}
