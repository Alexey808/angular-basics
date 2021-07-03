import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector.component';
import { SelectorAdditionalComponent } from './selector-additional/selector-additional.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SelectorComponent,
  }
]

@NgModule({
  declarations: [
    SelectorComponent,
    SelectorAdditionalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    SelectorComponent,
  ]
})
export class SelectorModule { }
