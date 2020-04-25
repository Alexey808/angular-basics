import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ref-for-child-additional',
  templateUrl: './ref-for-child-additional.component.html',
  styleUrls: ['./ref-for-child-additional.component.scss']
})
export class RefForChildAdditionalComponent implements OnInit {
  @Input() refTemplate;
  @Input() data;
  constructor() { }

  ngOnInit(): void {}

}
