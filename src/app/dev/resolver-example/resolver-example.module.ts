import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolverExampleComponent } from './resolver-example.component';
import { RouterModule, Routes } from '@angular/router';
import { ResolverExampleResolver } from './resolver-example.resolver';
import { IItem } from '../helps/item';

export interface IItemResolve {
  items: IItem[];
}

const routes: Routes = [
  {
    path: '',
    component: ResolverExampleComponent,
    resolve: {
      items: ResolverExampleResolver
    }
  }
];

@NgModule({
  declarations: [
    ResolverExampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ResolverExampleComponent,
  ],
})
export class ResolverExampleModule { }
