import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunFourComponent } from './fun-four/fun-four.component';
import { RouterModule, Routes } from '@angular/router';
import { FunFourDirective } from './fun-four.directive';

const routes: Routes = [
  {
    path: '', component: FunFourComponent,
  }
];

@NgModule({
  declarations: [
    FunFourComponent,
    FunFourDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    FunFourComponent,
  ]
})
export class Fun4Module { }
