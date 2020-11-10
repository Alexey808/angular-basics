import { Injectable } from '@angular/core';
import { IItem, IRes } from '../../core/default-data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FunFiveApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getData(): Observable<IItem[]> {
    return this.httpClient.get('fun5-data').pipe(
      map((res: IRes) => !res ? [] : res.data)
    );
  }
}
