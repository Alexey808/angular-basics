import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-project',
  templateUrl: './mini-project.component.html',
  styleUrls: ['./mini-project.component.scss']
})
export class MiniProjectComponent implements OnInit, OnDestroy {
  isHome = false;

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onActivate(event: any) {
    this.isHome = true;
  }

  onDeactivate(event: any) {
    this.isHome = false;
  }
}
