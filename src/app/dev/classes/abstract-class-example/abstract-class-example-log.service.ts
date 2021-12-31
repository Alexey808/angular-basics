import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbstractClassExampleLogService {
  constructor() { }

  public log(value: number) {
    console.log(`LOG:${new Date()}: `, value);
  }
}
