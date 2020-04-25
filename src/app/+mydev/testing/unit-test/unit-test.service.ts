import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitTestService {

  constructor(
    private http: HttpClient
  ) { }

  create(item): Observable<any> {
    return this.http.post(``, item);
  }

  fetch(item): Observable<any> {
    return this.http.get(``);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${id}`);
  }
}
