import { Component, Inject, OnInit } from '@angular/core';
import { DATA_PROVIDERS, DATA_TOKEN } from './example-logic-token';
import { Observable } from 'rxjs';
import { Item } from './data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-example-token-with-logic',
  templateUrl: './test-example-token-with-logic.component.html',
  providers: [DATA_PROVIDERS],
})
export class TestExampleTokenWithLogicComponent implements OnInit {

  constructor(
    @Inject(DATA_TOKEN) readonly item$: Observable<Item>,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log('params2: ', params);
    });
  }

}
