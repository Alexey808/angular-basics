import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IItem } from '../helps/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverExampleResolver implements Resolve<IItem[]> {
  data: IItem[] = Array
    .from({length: 10})
    .map((_, i) => ({id: i, value: `test-${i}`}));

  constructor() { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IItem[]> | Promise<IItem[]> | IItem[] {
    console.log('resolver-example');
    return this.data;
  }
}
