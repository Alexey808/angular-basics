import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-project',
  templateUrl: './mini-project.component.html',
  styleUrls: ['./mini-project.component.scss']
})
export class MiniProjectComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    console.log('MiniProjectComponent');
  }


}
