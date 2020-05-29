import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, share } from 'rxjs/operators';
import { IItem, MiniProjectApiService } from './mini-project-api.service';

@Injectable({
  providedIn: 'root'
})
export class MiniProjectService {

  constructor(
    private apiService: MiniProjectApiService,
  ) { }

  getItems(): Observable<IItem[]> {
    return this.apiService.getItems().pipe(
      share()
    );
  }
}
