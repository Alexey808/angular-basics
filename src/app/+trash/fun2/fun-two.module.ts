import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunTwoComponent } from './fun-two/fun-two.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FunTwoComponent }
];

@NgModule({
  declarations: [
    FunTwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    FunTwoComponent
  ]
})
export class FunTwoModule { }
