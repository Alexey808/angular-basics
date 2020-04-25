import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestBreakpointObserverComponent } from './test-breakpoint-observer/test-breakpoint-observer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import {ObserversModule} from '@angular/cdk/observers';

@NgModule({
  declarations: [
    TestBreakpointObserverComponent
  ],
  exports: [
    TestBreakpointObserverComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutModule,
    ObserversModule
  ]
})
export class AppAdaptiveLayoutModule { }
