import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestingMarbleService {

  constructor() { }

  getDataSimple(): Observable<string> {
    return of('test-string1');
  }

  getAsyncDataSimple() {
    setTimeout(() => {
      return of('test-string2');
    }, 500);
  }



}
