import { Injectable } from '@angular/core';
import { IItem, MiniProjectApiService } from '../services/mini-project-api.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MiniProjectService } from '../services/mini-project.service';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderResolvers implements Resolve<IItem[]>{
  constructor(
    private service: MiniProjectService,
    private serviceApi: MiniProjectApiService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IItem[]> | Promise<IItem[]> | IItem[] {
    console.log('resolve run');
    return this.serviceApi.getItems();
  }
}
