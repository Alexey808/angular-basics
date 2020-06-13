import { Component, OnDestroy, OnInit } from '@angular/core';
import { IItem, MiniProjectApiService } from '../services/mini-project-api.service';
import { Observable, Subject } from 'rxjs';
import { MiniProjectService } from '../services/mini-project.service';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home-mini-project',
  templateUrl: './home-mini-project.component.html',
  styleUrls: ['./home-mini-project.component.scss']
})
export class HomeMiniProjectComponent implements OnInit, OnDestroy {
  items$: Observable<IItem[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    public apiService: MiniProjectApiService,
    private service: MiniProjectService,
  ) { }

  ngOnInit(): void {
    this.items$ = this.apiService.getItems().pipe(
      takeUntil(this.unsubscribe$)
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  testClick() {
    console.log(this);
  }
}
