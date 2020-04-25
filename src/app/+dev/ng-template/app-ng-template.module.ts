import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefForChildComponent } from './ref-for-child/ref-for-child.component';
import { RefForChildAdditionalComponent } from './ref-for-child/ref-for-child-additional/ref-for-child-additional.component';



@NgModule({
  declarations: [
    RefForChildComponent,
    RefForChildAdditionalComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RefForChildComponent,
  ]
})
export class AppNgTemplateModule { }
