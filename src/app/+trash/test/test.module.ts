import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    TestComponent
  ]
})
export class AppTestModule { }
