import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IItem } from '../../core/default-data.service';
import { Observable, Subject } from 'rxjs';
import { FunFiveApiService } from './fun-five-api.service';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FunFiveResolverService implements Resolve<IItem[]>, OnDestroy {
  subs$ = new Subject<void>();
  data$ = new Subject<IItem[]>();


  constructor(
    private funFiveApiService: FunFiveApiService
  ) {}

  ngOnDestroy(): void {
    this.subs$.next();
    this.subs$.complete();
    debugger;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IItem[]> {
    return this.funFiveApiService.getData() //.subscribe();

  }
}
