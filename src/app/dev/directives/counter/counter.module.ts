import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterTestComponent } from './counter-test.component';
import { CounterDirective, CounterService } from './counter.directive';
import { RouterModule, Routes } from '@angular/router';
import { IndexCounterDirective } from './index-counter.directive';

const routes: Routes = [
  {
    path: '',
    component: CounterTestComponent,
  }
];

@NgModule({
  declarations: [
    CounterDirective,
    CounterTestComponent,
    IndexCounterDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    CounterService,
  ],
  exports: [
    CounterDirective,
    CounterTestComponent,
  ]
})
export class CounterModule { }
