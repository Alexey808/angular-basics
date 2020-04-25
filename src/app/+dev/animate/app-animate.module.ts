import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocTutorialComponent } from './doc-tutorial/doc-tutorial.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    DocTutorialComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    DocTutorialComponent
  ]
})
export class AppAnimateModule { }
