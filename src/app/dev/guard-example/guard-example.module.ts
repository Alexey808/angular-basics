import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardExampleComponent } from './guard-example.component';
import { RouterModule, Routes } from '@angular/router';
import { GuardExampleGuard } from './guard-example.guard';

const routes: Routes = [
  {
    path: '',
    component: GuardExampleComponent,
    canActivate: [GuardExampleGuard],
  }
];

@NgModule({
  declarations: [
    GuardExampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    GuardExampleComponent,
  ]
})
export class GuardExampleModule { }
