import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsTestComponent } from './rxjs-test.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RxjsTestComponent,
  }
];

@NgModule({
  declarations: [
    RxjsTestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RxjsTestComponent,
  ]
})
export class RxjsTestModule { }
