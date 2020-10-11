import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Fun3InterceptorService implements HttpInterceptor {

  fakeData = {
    data: [
      {id: 0, value: 'value-1', bool: true},
      {id: 1, value: 'value-2', bool: false},
      {id: 2, value: 'value-3', bool: true},
      {id: 3, value: 'value-4', bool: false},
      {id: 4, value: 'value-5', bool: true},
    ]
  };

  fakeData2 = {
    data: [
      {id: 5, value: 'value_5', bool: true},
      {id: 6, value: 'value_6', bool: false},
      {id: 7, value: 'value_7', bool: true},
      {id: 8, value: 'value_8', bool: false},
      {id: 9, value: 'value_9', bool: true},
    ]
  };

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor run');
    if (req.method === 'GET' && req.url === 'get-data-one') {
      return of(
        new HttpResponse({ status: 200, body: this.fakeData })
      );
    }

    if (req.method === 'GET' && req.url === 'get-data-two') {
      // setTimeout(() => {
        return of(
          new HttpResponse({ status: 200, body: this.fakeData2 })
        );
      // }, 3000);
    } else {
      return next.handle(req);
    }
  }
}
