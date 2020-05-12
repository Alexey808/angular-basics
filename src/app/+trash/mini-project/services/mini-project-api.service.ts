import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface IItem {
  id: string;
  name: string;
  bool: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MiniProjectApiService {
  private readonly url = '/api/items';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getItems(): Observable<IItem[]> {
    return this.httpClient.get<any>(this.url).pipe(
      catchError((err) => {
        console.error(err);
        return err;
      })
    );
  }
}
