import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgTemplateOneExampleService {

  constructor() { }

  currentRole$(): Observable<string> {
    return of('user').pipe(
      delay(1000),
    );
  }
}
