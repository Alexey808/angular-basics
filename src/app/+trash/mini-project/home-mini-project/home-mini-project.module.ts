import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMiniProjectComponent } from './home-mini-project.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';
import { DataLoaderResolvers } from '../resolvers/data-loader.resolvers';

const route: Routes = [
  {
    path: '',
    component: HomeMiniProjectComponent,
    resolve: {
      items: DataLoaderResolvers
    }
  }
];

@NgModule({
  declarations: [
    HomeMiniProjectComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        FlexModule,
    ],
  exports: [
    HomeMiniProjectComponent,
  ]
})
export class AppHomeMiniProjectModule { }
