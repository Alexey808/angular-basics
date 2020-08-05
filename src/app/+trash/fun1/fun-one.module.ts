import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunOneComponent } from './fun-one/fun-one.component';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { FunOneResolverService } from './fun-one-resolver.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FunOneInterceptorService } from './fun-one-interceptor.service';

const routes: Routes = [
  {
    path: '',
    component: FunOneComponent,
    resolve: {
      dataResolve: FunOneResolverService
    },
  }
];

@NgModule({
  declarations: [
    FunOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: FunOneInterceptorService,
  //     multi: true,
  //   }
  // ],
  exports: [
    FunOneComponent,
  ]
})
export class FunOneModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: FunOneModule,
  //     providers: [
  //       {
  //         provide: HTTP_INTERCEPTORS,
  //         useClass: FunOneInterceptorService,
  //         multi: true
  //       }
  //     ]
  //   };
  // }
}
