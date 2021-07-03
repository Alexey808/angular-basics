import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyLinksComponent } from './my-links.component';

const routes: Routes = [
  {
    path: '',
    component: MyLinksComponent,
  }
];

@NgModule({
  declarations: [
    MyLinksComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    MyLinksComponent,
  ]
})
export class MyLinksModule { }
