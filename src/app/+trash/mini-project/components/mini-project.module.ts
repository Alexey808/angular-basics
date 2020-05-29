import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniProjectComponent } from './mini-project.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MiniProjectComponent,
  ],
    imports: [
      CommonModule,
      RouterModule
    ],
  exports: [
    MiniProjectComponent
  ]
})
export class AppMiniProjectModule { }
