import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { TestExampleModule } from './test-example/test-example.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./test-example/test-example.module')
      .then((m) => m.TestExampleModule),
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestExampleModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    TestExampleModule,
  ]
})
export class TestsModule { }
