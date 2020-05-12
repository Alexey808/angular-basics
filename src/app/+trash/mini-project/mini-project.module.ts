import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniProjectComponent } from './components/mini-project.component';



@NgModule({
  declarations: [
    MiniProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MiniProjectComponent
  ]
})
export class AppMiniProjectModule { }
