import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable, of, timer } from 'rxjs';
import { catchError, share, tap } from 'rxjs/operators';
import { IItem, MiniProjectApiService } from './mini-project-api.service';

@Injectable({
  providedIn: 'root'
})
export class MiniProjectService {
  constructor(
    private apiService: MiniProjectApiService,
  ) { }
  private filterName = new BehaviorSubject<string>('');
  filterName$ = this.filterName.asObservable();

  // private items = new BehaviorSubject<IItem[]>([]);
  // items$ = this.items.asObservable();

  // getItems(): Observable<IItem[]> {
  //   return this.apiService.getItems();
  // }

  getFilter(): Observable<string> {
    return this.filterName$;
  }
}
