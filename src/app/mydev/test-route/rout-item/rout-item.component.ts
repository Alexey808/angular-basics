import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RoutItemsService} from './rout-items.service';

@Component({
  selector: 'app-rout-item',
  templateUrl: './rout-item.component.html',
  styleUrls: ['./rout-item.component.scss']
})
export class RoutItemComponent implements OnInit {
  item = null;
  showId = false;

  constructor(
    private routActive: ActivatedRoute,
    private service: RoutItemsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.routActive.params.subscribe((params: Params) => {
      this.item = this.service.findItemId(Number(params.id));
    });
    this.routActive.queryParams.subscribe((params: Params) => {
      this.showId = params.showId === 'true';
    });
    this.routActive.fragment.subscribe((fragment) => {
      console.log(fragment);
    });
  }

  goBack() {
    this.router.navigate(['/page2']);
  }

  testRoute() {
    this.router.navigate(['/page2', this.item.id], {
      queryParams: {
        showId: true
      },
      fragment: 'program-fragment'
    });
  }

}
