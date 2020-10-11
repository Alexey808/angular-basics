import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunThreeComponent } from './fun-three/fun-three.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FunThreeComponent }
];

@NgModule({
  declarations: [
    FunThreeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FunThreeComponent,
  ]
})
export class Fun3Module { }
