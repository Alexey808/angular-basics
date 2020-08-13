import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingMarbleComponent } from './testing-marble.component';



@NgModule({
  declarations: [
    TestingMarbleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestingMarbleComponent,
  ]
})
export class TestingMarbleModule { }
