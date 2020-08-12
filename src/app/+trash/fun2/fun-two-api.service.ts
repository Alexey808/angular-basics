import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

export interface IItem {
  id: number;
  value: string | number;
  bool: boolean;
}

interface IRes {
  data: IItem[];
}

@Injectable({
  providedIn: 'root'
})
export class FunTwoApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getData(): Observable<IItem[]> {
    return this.httpClient.get('fun2').pipe(
      map((values: IRes) => values.data)
    );
  }
}
