import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractClassExampleComponent } from './abstract-class-example.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AbstractClassExampleComponent,
  }
];

@NgModule({
  declarations: [
    AbstractClassExampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    AbstractClassExampleComponent
  ]
})
export class AbstractClassExampleModule { }
