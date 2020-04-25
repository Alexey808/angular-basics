import {Component, OnDestroy, OnInit} from '@angular/core';
import {Item} from '../test-resolver.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-test-resolver',
  templateUrl: './test-resolver.component.html',
  styleUrls: ['./test-resolver.component.scss']
})
export class TestResolverComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
  ) { }

  item: Item;

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log('data -> ', data);
      this.item = data.item;
    });
  }

  ngOnDestroy(): void {
    this.route.data.subscribe();
  }
}
