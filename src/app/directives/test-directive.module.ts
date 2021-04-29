import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirectiveComponent } from './test-directive.component';
import { AttributeDirectiveDirective } from './attribute-directive/attribute-directive.directive';



@NgModule({
  declarations: [
    AttributeDirectiveDirective,
    TestDirectiveComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestDirectiveComponent,
    AttributeDirectiveDirective,
  ]
})
export class TestDirectiveModule { }
