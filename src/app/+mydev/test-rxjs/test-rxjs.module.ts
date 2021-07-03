import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { TestRxjsComponent } from './test-rxjs.component';



@NgModule({
  declarations: [
    FilterComponent,
    TestRxjsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterComponent
  ]
})
export class TestRxjsModule { }
