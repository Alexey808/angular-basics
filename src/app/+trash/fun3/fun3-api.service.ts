import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeAll, scan, tap, toArray } from 'rxjs/operators';

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
export class Fun3ApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getData1(): Observable<IItem[]> {
    return this.httpClient.get('get-data-one').pipe(
      map((res: IRes) => res.data)
    );
  }

  getData2(): Observable<IItem[]> {
    return this.httpClient.get('get-data-two').pipe(
      map((res: IRes) => res.data)
    );
  }

  getDataAll(): Observable<any> {
    return forkJoin([
      this.httpClient.get('get-data-one').pipe(
        map((res: IRes) => res.data)
      ),
      this.httpClient.get('get-data-two').pipe(
        map((res: IRes) => res.data)
      ),
    ]).pipe(
      // tap(x => console.log(x)),
      // OK!
      // map((res: any[]) => [...res.map((x: IRes) => x.data)]),
      // NO WORK!
      // scan((acc, res) => {
      //   return [...acc, ...res.map((x: IRes) => x.data)];
      // }),
    );
  }
}
