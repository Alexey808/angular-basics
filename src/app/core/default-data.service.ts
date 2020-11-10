import { Injectable } from '@angular/core';
import { newArray } from '@angular/compiler/src/util';

export interface IItem {
  id: number;
  value: string | number;
  bool: boolean;
}

export interface IRes {
  data: IItem[];
}

@Injectable({
  providedIn: 'root'
})
export class DefaultDataService {

  constructor() { }

  public defaultResData(num: number = 5): IRes {
    const data = newArray(num).map((item, index) => ({
      id: index,
      value: `value-${index}`,
      bool: Math.random() > 0.5
    }));

    return {
      data
    };
  }
}
