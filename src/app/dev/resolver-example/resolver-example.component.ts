import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from '../helps/item';
import { IItemResolve } from './resolver-example.module';

@Component({
  selector: 'app-resolver-example',
  templateUrl: './resolver-example.component.html',
  styleUrls: ['./resolver-example.component.scss']
})
export class ResolverExampleComponent implements OnInit {
  items: IItem[] = [];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: IItemResolve) => {
      this.items = data.items;
    });
  }
}
