import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestExampleComponent } from './test-example.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TestExampleComponent,
  }
];

@NgModule({
  declarations: [
    TestExampleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    TestExampleComponent,
  ]
})
export class TestExampleModule { }
