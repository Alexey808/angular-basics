import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestLazyLoadingComponent} from './test-lazy-loading.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    TestLazyLoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: TestLazyLoadingComponent
      }
    ])
  ],
  exports: [
    TestLazyLoadingComponent
  ]
})
export class TestLazyLoadingModule { }
