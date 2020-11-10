import { Injectable } from '@angular/core';
import { DefaultDataService, IRes } from '../../core/default-data.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunFiveInterceptorService implements HttpInterceptor {
  faceData: IRes;

  constructor(
    private defaultDataService: DefaultDataService,
  ) {
    this.faceData = this.defaultDataService.defaultResData();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET' && req.url === 'fun-five') {
      return of(
        new HttpResponse({
          status: 200,
          body: this.faceData
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
