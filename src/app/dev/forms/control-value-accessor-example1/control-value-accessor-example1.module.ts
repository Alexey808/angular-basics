import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessorExample1Component } from './control-value-accessor-example1.component';
import { RouterModule, Routes } from '@angular/router';
import { CounterControlComponent } from './counter-control/counter-control.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ControlValueAccessorExample1Component,
  }
];

@NgModule({
  declarations: [
    ControlValueAccessorExample1Component,
    CounterControlComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [
    ControlValueAccessorExample1Component,
  ]
})
export class ControlValueAccessorExample1Module { }
