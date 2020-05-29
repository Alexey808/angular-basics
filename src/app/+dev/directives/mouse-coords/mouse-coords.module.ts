import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseCoordsDirective } from './mouse-coords.directive';


@NgModule({
  declarations: [
    MouseCoordsDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MouseCoordsDirective
  ]
})
export class MouseCoordsModule { }
