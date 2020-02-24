import { Component } from '@angular/core';

export interface Item {
  title: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';
  bool = true;
  items = [{title: 'abc'}, {title: 'xyz'}];
  search = '';
}
