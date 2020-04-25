import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestNgAnimateComponent } from './test-ng-animate/test-ng-animate.component';
import { ClickAnimateComponent } from './click-animate/click-animate.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    TestNgAnimateComponent,
    ClickAnimateComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    TestNgAnimateComponent,
    ClickAnimateComponent,
  ]
})
export class AppNgAnimateModule { }
