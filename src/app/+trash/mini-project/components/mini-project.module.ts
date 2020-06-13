import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniProjectComponent } from './mini-project.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeMiniProjectComponent } from '../home-mini-project/home-mini-project.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    // localhost:4200/mini-project
    path: '', component: MiniProjectComponent, children: [
      {
        path: 'mini-project/home',
        loadChildren: () => import('./../home-mini-project/home-mini-project.module')
          .then(m => m.AppHomeMiniProjectModule)
      },
    ]
  },
  // {
  //   // localhost:4200/mini-project/home-mini-project // c lazy згрузкой
  //   path: 'home-mini-project',
  //   loadChildren: () => import('./../home-mini-project/home-mini-project.module')
  //     .then(m => m.AppHomeMiniProjectModule)
  // },
  // {
  //   path: 'home', component: HomeMiniProjectComponent
  // },
];

@NgModule({
  declarations: [
    MiniProjectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
  ],
  exports: [
    MiniProjectComponent
  ]
})
export class AppMiniProjectModule { }
