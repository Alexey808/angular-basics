import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-route-program-navigation',
  templateUrl: './test-route-program-navigation.component.html',
  styleUrls: ['./test-route-program-navigation.component.scss']
})
export class TestRouteProgramNavigationComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  nav() {
    const params = {
      paramOne: 'param1',
      paramTwo: 'param2',
    };

    const threeLevel = 'three-level';

    this.router.navigate(['one-level', 'two-level', threeLevel], {queryParams: params});
  }
}
