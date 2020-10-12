import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem, IRes } from '../helpers/default-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Fun4ApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getData(): Observable<IItem[]> {
    return this.httpClient.get('fun3-data').pipe(
      map((res: IRes) => !res ? [] : res.data)
    );
  }
}
