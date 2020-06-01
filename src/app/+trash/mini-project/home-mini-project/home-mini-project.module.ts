import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMiniProjectComponent } from './home-mini-project.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  {
    path: '', component: HomeMiniProjectComponent
  }
];

@NgModule({
  declarations: [
    HomeMiniProjectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ],
  exports: [
    HomeMiniProjectComponent,
  ]
})
export class AppHomeMiniProjectModule { }
