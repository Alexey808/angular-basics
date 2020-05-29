import { Component, OnDestroy, OnInit } from '@angular/core';
import { IItem, MiniProjectApiService } from '../services/mini-project-api.service';
import { Subject } from 'rxjs';
import { MiniProjectService } from '../services/mini-project.service';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home-mini-project',
  templateUrl: './home-mini-project.component.html',
  styleUrls: ['./home-mini-project.component.scss']
})
export class HomeMiniProjectComponent implements OnInit, OnDestroy {

  items: IItem[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(
    public apiService: MiniProjectApiService,
    private service: MiniProjectService,
  ) { }

  ngOnInit(): void {
    console.log('HomeMiniProjectComponent');

    // this.apiService.getItems().subscribe((x: IItem[]) => {
    //   console.log('subs', x);
    //   this.items = x;
    // });

    this.service.getItems().pipe(
      tap(x => console.log('pipe component', x)),
      takeUntil(this.unsubscribe$)
    ).subscribe((x: IItem[]) => {
      console.log('subs', x);
      this.items = x;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  testClick() {
    console.log(this);
  }
}
