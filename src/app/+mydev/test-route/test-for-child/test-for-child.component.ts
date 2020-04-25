import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test-for-child',
  templateUrl: './test-for-child.component.html',
  styleUrls: ['./test-for-child.component.scss']
})
export class TestForChildComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  click() {
    const url = `${this.router.url}/child`;
    console.log('router -> ', url, this.router);
    this.router.navigate([url]);
  }
}
