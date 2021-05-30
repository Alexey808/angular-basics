import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRxjsServiceComponent } from './test-rxjs-service.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TestRxjsServiceComponent,
  }
];

@NgModule({
  declarations: [
    TestRxjsServiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    TestRxjsServiceComponent,
  ],
})
export class TestRxjsServiceModule { }
