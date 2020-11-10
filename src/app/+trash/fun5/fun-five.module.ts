import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunFiveComponent } from './fun-five/fun-five.component';
import { FunFivePipe } from './fun-five.pipe';
import { FunFiveDirective } from './fun-five.directive';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FunFiveComponent,
  }
];

@NgModule({
  declarations: [
    FunFiveComponent,
    FunFiveDirective,
    FunFivePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FunFiveModule { }
