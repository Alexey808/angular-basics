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
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs-test.module').then(m => m.RxjsTestModule),
  },
  {
    path: 'abstract-class',
    loadChildren: () => import('./classes/abstract-class-example/abstract-class-example.module').then(m => m.AbstractClassExampleModule),
  },
  {
    path: 'form-example',
    loadChildren: () => import('./forms/form-example/form-example.module').then(m => m.FormExampleModule),
  },
  {
    path: 'rest-api',
    loadChildren: () => import('./rest-api/rest-api.module').then(m => m.RestApiModule),
  }
];
