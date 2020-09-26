import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgContentComponent } from './ng-content.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    NgContentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgContentComponent,
  ]
})
export class NgContentModule { }
