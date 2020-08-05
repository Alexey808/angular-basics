import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunOneApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getData(): Observable<any> {
    console.log('start api-service');
    return this.httpClient.get('data');
  }
}
