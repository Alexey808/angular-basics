import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDiTokenModule } from './di-token/test-di-token.module';
import { AppPipesModule } from './pipes/app-pipes.module';
import { TestRxjsServiceModule } from './services/test-rxjs-service/test-rxjs-service.module';
import { RestApiModule } from './rest-api/rest-api.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestDiTokenModule,
    AppPipesModule,
    TestRxjsServiceModule,
    RestApiModule,
  ],
  exports: []
})
export class DevModule { }
