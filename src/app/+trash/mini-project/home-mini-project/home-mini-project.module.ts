import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMiniProjectComponent } from './home-mini-project.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeMiniProjectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeMiniProjectComponent,
  ]
})
export class AppHomeMiniProjectModule { }
