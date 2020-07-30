import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TestRoutePageComponent } from './+mydev/test-route/test-route-page/test-route-page.component';
import { TestRoutePage1Component } from './+mydev/test-route/test-route-page1/test-route-page1.component';
import { TestRoutePage2Component } from './+mydev/test-route/test-route-page2/test-route-page2.component';
import { RoutItemComponent } from './+mydev/test-route/rout-item/rout-item.component';
import { TestRoutePage2ChildComponent } from './+mydev/test-route/test-route-page2/test-route-page2-child/test-route-page2-child.component';
import { TestErrorPageComponent } from './+mydev/test-route/test-error-page/test-error-page.component';
import { TestResolverComponent } from './+mydev/resolvers/test-resolver/test-resolver.component';
import { TestResolver } from './+mydev/resolvers/test-resolver.resolver';
import { TestForChildComponent } from './+mydev/test-route/test-for-child/test-for-child.component';
import { AppMiniProjectModule } from './+trash/mini-project/components/mini-project.module';
import { AppHomeMiniProjectModule } from './+trash/mini-project/home-mini-project/home-mini-project.module';
import { TestRouteProgramNavigationComponent } from './+mydev/test-route/test-route-program-navigation/test-route-program-navigation.component';


const routes: Routes = [
  {path: '', component: TestRoutePageComponent},
  {path: 'page1', component: TestRoutePage1Component},
  {path: 'page2', component: TestRoutePage2Component, children: [
    {path: 'page2-child', component: TestRoutePage2ChildComponent}
  ]},
  {path: 'page2/:id', component: RoutItemComponent},
  {path: 'prog-nav', component: TestRouteProgramNavigationComponent},
  {path: 'one-level/two-level/three-level', component: TestRoutePageComponent},
  {path: 'error', component: TestErrorPageComponent},
  {
    path: 'mini-project',
    loadChildren: () => import('./+trash/mini-project/components/mini-project.module')
      .then(m => m.AppMiniProjectModule),
  },
  {
    path: 'test-resolver/:id',
    component: TestResolverComponent,
    resolve: {
      item: TestResolver
    }
  },
  {path: 'test-for-child', component: TestForChildComponent},

  // todo остаётся проблема forRoot не знает о модульном дочернем роуте mini-project/home
  // {path: '**', redirectTo: '/error'}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules // стратегия загрузки, предварительная загрузка модулей
  })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
