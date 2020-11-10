import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FunFiveInterceptorService } from '../+trash/fun5/fun-five-interceptor.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // для +trash/fun1
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: FunOneInterceptorService,
    //   multi: true,
    // },

    // для +trash/fun2
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: FunTwoInterceptorService,
    //   multi: true,
    // }

    // для +tresh/fun3
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: Fun3InterceptorService,
    //   multi: true,
    // }

    // для +tresh/fun4
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: Fun4InterceptorService,
    //   multi: true,
    // }

    // для +tresh/fun5
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FunFiveInterceptorService,
      multi: true,
    }
  ]
})
export class InterceptorsModule { }
