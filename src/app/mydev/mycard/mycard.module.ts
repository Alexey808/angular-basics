import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MycardComponent} from './mycard.component';



@NgModule({
  declarations: [
    MycardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MycardComponent
  ]
})
export class MycardModule { }
