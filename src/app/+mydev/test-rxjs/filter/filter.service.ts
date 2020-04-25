/*
* Суть теста в том чтобы возвращать коллекцию когда первый раз открывается страница и
* при обновлении фильтров обновлялась коллекция
* */


import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {distinctUntilChanged, switchMap, tap} from 'rxjs/operators';

const defaultFilter = 'al';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  nameFilter = '';
  private currentFilter$ = new Subject<string>();

  public collection$: Observable<string[]>;

  constructor() {
    this.collection$ = this.currentFilter$.pipe(
      tap(x => console.log('pipe collection', x)),
      distinctUntilChanged(),
      switchMap((filter) => this.getCollection(filter))
      // switchMap((filter) => {
      //   this.nameFilter = filter;
      //   return this.collection;
      // })
    );
  }

  set filter(currentFilter: string) {
    console.log('set filter = ', currentFilter);
    this.currentFilter$.next(currentFilter);
  }

  get collection(): Observable<string[]> {
    console.log('getCollection ->', this.nameFilter);
    return fakeApiService();
  }

  getCollection(filter: string): Observable<string[]> {
    this.currentFilter$.next();
    console.log('getCollection', filter);
    return fakeApiService();
  }
}

function fakeApiService(): Observable<string[]> {
  const defaultCollection = ['all', 'aladin', 'test', 'testest'];
  return of(defaultCollection);
}
