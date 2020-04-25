import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Item, TestResolverService} from './test-resolver.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TestResolver implements Resolve<Item> {
  constructor(
    private testResolverService: TestResolverService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | Item {
    return this.testResolverService.getById(+route.params.id);
  }
}
