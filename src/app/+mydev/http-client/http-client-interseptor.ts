import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

/**
 * Перехватывает запросы
 */
export class HttpClientInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('Interceptor request', req);
    const cloned = req.clone({
      headers: req.headers.append('test-auth', 'TOKEN!!!')
    });

    return next.handle(cloned).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log('Interceptor response', event);
        }
      })
    );
  }
}
