import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DefaultDataService, IRes } from '../helpers/default-data.service';

@Injectable({
  providedIn: 'root'
})
export class Fun4InterceptorService implements HttpInterceptor {

  fakeData: IRes;

  constructor(
    private defaultDataService: DefaultDataService,
  ) {
    this.fakeData = this.defaultDataService.defaultResData();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET' && req.url === 'fun3-data') {
      return of(
        new HttpResponse({status: 200, body: this.fakeData})
      );
    } else {
      return next.handle(req);
    }
  }


}
