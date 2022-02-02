import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ControlValueAccessorExampleComponent } from './control-value-accessor-example.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: ControlValueAccessorExampleComponent,
  }
];

@NgModule({
  declarations: [
    ControlValueAccessorExampleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [
    ControlValueAccessorExampleComponent,
  ]
})
export class ControlValueAccessorExampleModule { }
