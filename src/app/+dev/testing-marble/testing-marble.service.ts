import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestingMarbleService {
  private readonly testData = ['Anna', 'Bert', 'Chris'];

  get getUsers(): Observable<string> {
    return interval(1000).pipe(
      take(this.testData.length),
      map(i => this.testData[i])
    );
  }
}
