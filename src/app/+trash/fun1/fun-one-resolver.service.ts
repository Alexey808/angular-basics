import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FunOneApiService } from './fun-one-api.service';

@Injectable({
  providedIn: 'root'
})
export class FunOneResolverService implements Resolve<any> {
  constructor(
    private funOneApiService: FunOneApiService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    console.log('start resolver');
    return this.funOneApiService.getData();
  }
}
