import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoutItemsService} from '../rout-item/rout-items.service';

@Component({
  selector: 'app-test-route-page2',
  templateUrl: './test-route-page2.component.html',
  styleUrls: ['./test-route-page2.component.scss']
})
export class TestRoutePage2Component implements OnInit {
  constructor(
    public service: RoutItemsService
  ) { }

  ngOnInit(): void {
  }


}
