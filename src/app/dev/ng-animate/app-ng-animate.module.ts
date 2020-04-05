import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestNgAnimateComponent} from './test-ng-animate/test-ng-animate.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    TestNgAnimateComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    TestNgAnimateComponent,
  ]
})
export class AppNgAnimateModule { }
