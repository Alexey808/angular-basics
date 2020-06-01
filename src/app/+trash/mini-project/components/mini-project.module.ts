import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniProjectComponent } from './mini-project.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // localhost:4200/mini-project
    path: '', component: MiniProjectComponent
  },
  {
    // localhost:4200/mini-project/home-mini-project // c lazy згрузкой
    path: 'home-mini-project',
    loadChildren: () => import('./../home-mini-project/home-mini-project.module')
      .then(m => m.AppHomeMiniProjectModule)
  },
];

@NgModule({
  declarations: [
    MiniProjectComponent,
  ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
    ],
  exports: [
    MiniProjectComponent
  ]
})
export class AppMiniProjectModule { }
