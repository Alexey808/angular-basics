import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestRxjsRenderSubjectComponent} from './test-rxjs-render-subject/test-rxjs-render-subject.component';
import { TestAsyncStreamComponent } from './test-async-stream/test-async-stream.component';



@NgModule({
  declarations: [
    TestRxjsRenderSubjectComponent,
    TestAsyncStreamComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestRxjsRenderSubjectComponent,
    TestAsyncStreamComponent,
  ]
})
export class AppRxjsModule { }
