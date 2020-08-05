import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunOneInterceptorService implements HttpInterceptor {
  constructor() { }

  fakeData = {
    data: 'test-data',
  };

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('start interceptor');
    if (req.method === 'GET') {
      return of(
        new HttpResponse({ status: 200, body: this.fakeData })
      );
    } else {
      next.handle(req);
    }
  }

}
