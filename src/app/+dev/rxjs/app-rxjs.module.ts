import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestRxjsRenderSubjectComponent} from './test-rxjs-render-subject/test-rxjs-render-subject.component';



@NgModule({
  declarations: [
    TestRxjsRenderSubjectComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestRxjsRenderSubjectComponent,
  ]
})
export class AppRxjsModule { }
