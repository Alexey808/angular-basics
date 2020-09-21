import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSharedComponent } from './test-shared.component';



@NgModule({
  declarations: [
    TestSharedComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TestSharedComponent,
  ]
})
export class TestSharedModule { }
