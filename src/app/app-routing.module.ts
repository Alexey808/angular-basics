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
import { TestRouteProgramNavigationComponent } from './+mydev/test-route/test-route-program-navigation/test-route-program-navigation.component';
import { FunFiveResolverService } from './+trash/fun5/fun-five-resolver.service';
import { MyLinksComponent } from './my-links/my-links.component';
import { DevRoutes } from './dev/dev-routes';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./my-links/my-links.module').then((m) => m.MyLinksModule),
  },
  ...DevRoutes,

  // {
  //   path: 'links',
  //   component: MyLinksComponent
  // },
  // {path: 'page0', component: TestRoutePageComponent},
  // {path: 'page1', component: TestRoutePage1Component},
  // {path: 'page2', component: TestRoutePage2Component, children: [
  //   {path: 'page2-child', component: TestRoutePage2ChildComponent}
  // ]},
  // {path: 'page2/:id', component: RoutItemComponent},
  // {path: 'prog-nav', component: TestRouteProgramNavigationComponent},
  // {path: 'one-level/two-level/three-level', component: TestRoutePageComponent},
  // {path: 'error', component: TestErrorPageComponent},
  // {
  //   path: 'mini-project',
  //   loadChildren: () => import('./+trash/mini-project/components/mini-project.module')
  //     .then(m => m.AppMiniProjectModule),
  // },
  // {
  //   path: 'test-resolver/:id',
  //   component: TestResolverComponent,
  //   resolve: {
  //     item: TestResolver
  //   }
  // },
  // {path: 'test-for-child', component: TestForChildComponent},
  // {
  //   path: 'fun1',
  //   loadChildren: () => import('./+trash/fun1/fun-one.module')
  //     .then(m => m.FunOneModule),
  // },
  // {
  //   path: 'fun2',
  //   loadChildren: () => import('./+trash/fun2/fun-two.module')
  //     .then(m => m.FunTwoModule),
  // },
  // {
  //   path: 'fun3',
  //   loadChildren: () => import('./+trash/fun3/fun3.module')
  //     .then(m => m.Fun3Module),
  // },
  // {
  //   path: 'fun4',
  //   loadChildren: () => import('./+trash/fun4/fun4.module')
  //     .then(m => m.Fun4Module),
  // },
  // {
  //   path: 'fun5',
  //   loadChildren: () => import('./+trash/fun5/fun-five.module')
  //     .then(m => m.FunFiveModule),
  //   resolve: {
  //     items: FunFiveResolverService,
  //   }
  // },

  // todo остаётся проблема forRoot не знает о модульном дочернем роуте mini-project/home
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {
  //   preloadingStrategy: PreloadAllModules // стратегия загрузки, предварительная загрузка модулей
  // })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
