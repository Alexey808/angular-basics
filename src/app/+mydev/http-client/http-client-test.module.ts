import {NgModule, Provider} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientTestComponent} from './http-client-test/http-client-test.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientInterceptor} from './http-client-interseptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpClientInterceptor,
  multi: true,
};

@NgModule({
  declarations: [
    HttpClientTestComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    HttpClientTestComponent
  ],
  providers: [INTERCEPTOR_PROVIDER]
})
export class HttpClientTestModule { }
