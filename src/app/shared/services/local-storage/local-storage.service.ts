import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public isError = false;

  constructor() { }

  public get(key: string) {
    return this.checkIsStorage() ? localStorage.getItem(key) : null;
  }

  public set(key: string, value): void {
    if (this.checkIsStorage()) {
      localStorage.setItem(key, value);
    }
  }

  public remove(key: string): void {
    if (this.checkIsStorage()) {
      localStorage.removeItem(key);
    }
  }

  private checkIsStorage(): boolean {
    try {
      localStorage.setItem('_test', '');
      this.isError = !localStorage.getItem('_test');
      return this.isError;
    } catch (e) {
      this.isError = true;
      return this.isError;
    }
  }
}
