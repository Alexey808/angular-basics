import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerExamplesComponent } from './worker-examples.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WorkerExamplesComponent,
  }
];

@NgModule({
  declarations: [
    WorkerExamplesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    WorkerExamplesComponent,
  ]
})
export class WorkerExamplesModule { }
