import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MycardEditService {
  editCardTitle: string = 'My title!';
  constructor() { }
}
