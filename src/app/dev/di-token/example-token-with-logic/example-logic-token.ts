import { InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DataService, Item } from './data.service';

export const DATA_TOKEN = new InjectionToken<Observable<Item>>(
  'Return an object by id',
);

export const DATA_PROVIDERS: Provider[] = [
  {
    provide: DATA_TOKEN,
    deps: [ ActivatedRoute, DataService ],
    useFactory: dataFactory,
  },
];

export function dataFactory(
  { params }: ActivatedRoute,
  dataService: DataService,
): Observable<Item> {
  return params.pipe(
    switchMap((p: Params) => {
      const { itemId } = p;
      return dataService.getItem(itemId);
    })
  );
}
