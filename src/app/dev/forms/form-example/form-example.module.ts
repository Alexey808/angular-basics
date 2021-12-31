import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormExampleComponent } from './form-example.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: FormExampleComponent,
  }
];

@NgModule({
  declarations: [
    FormExampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [
    FormExampleComponent,
  ]
})
export class FormExampleModule { }
