import { Routes } from '@angular/router';

export const DevRoutes: Routes = [
  {
    path: 'di-token',
    loadChildren: () => import('./di-token/test-di-token.module').then(m => m.TestDiTokenModule),
  },
  {
    path: 'test-rxjs-service',
    loadChildren: () => import('./services/test-rxjs-service/test-rxjs-service.module').then(m => m.TestRxjsServiceModule),
  },
  {
    path: 'pipes-my-currency',
    loadChildren: () => import('./pipes/app-pipes.module').then(m => m.AppPipesModule),
  },
  {
    path: 'ng-content',
    loadChildren: () => import('./ng-content/selector/selector.module').then(m => m.SelectorModule),
  }
];
