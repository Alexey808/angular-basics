import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestJsonplaceholderApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getItem(num: number): Observable<any> {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/todos/${1}`).pipe(
      delay(5000),
    );
  }

  getData(): Observable<any> {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  getDataFetch() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json));
  }
}
