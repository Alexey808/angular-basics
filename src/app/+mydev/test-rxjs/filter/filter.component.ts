import { Component, OnInit } from '@angular/core';
import {FilterService} from './filter.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: []
})
export class FilterComponent implements OnInit {
  collection$: Observable<string[]>;
  collection: Observable<string[]>;

  constructor(
    public filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.filterService.filter = 'al';
    this.collection = this.filterService.collection;
    this.collection$ = this.filterService.collection$;
  }

  setFilter(filter): void {
    this.filterService.filter = filter;
  }



}
