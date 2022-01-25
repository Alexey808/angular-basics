import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestJsonplaceholderApiComponent } from './test-jsonplaceholder-api/test-jsonplaceholder-api.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TestJsonplaceholderApiComponent,
  }
];

@NgModule({
  declarations: [
    TestJsonplaceholderApiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    TestJsonplaceholderApiComponent,
  ]
})
export class RestApiModule { }
