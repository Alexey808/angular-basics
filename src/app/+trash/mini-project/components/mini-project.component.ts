import { Component, OnInit } from '@angular/core';
import { IItem, MiniProjectApiService } from '../services/mini-project-api.service';

@Component({
  selector: 'app-mini-project',
  templateUrl: './mini-project.component.html',
  styleUrls: ['./mini-project.component.scss']
})
export class MiniProjectComponent implements OnInit {
  items: IItem[] = [];

  constructor(
    public apiService: MiniProjectApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getItems().subscribe((x: IItem[]) => {
      console.log('subs', x);
      this.items = x;
    });
  }

}
