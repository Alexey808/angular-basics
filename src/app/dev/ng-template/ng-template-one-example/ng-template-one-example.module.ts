import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTemplateOneExampleComponent } from './ng-template-one-example.component';
import { CheckRoleDirective } from './check-role.directive';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NgTemplateOneExampleComponent,
  }
];

@NgModule({
  declarations: [
    NgTemplateOneExampleComponent,
    CheckRoleDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    NgTemplateOneExampleComponent,
  ]
})
export class NgTemplateOneExampleModule { }
