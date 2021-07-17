import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDiTokenModule } from './di-token/test-di-token.module';
import { AppPipesModule } from './pipes/app-pipes.module';
import { TestRxjsServiceModule } from './services/test-rxjs-service/test-rxjs-service.module';
import { CustomPipeValueFilter } from './rxjs/custom-pipe-operators/values-filter';


@NgModule({
  declarations: [CustomPipeValueFilter],
  imports: [
    CommonModule,
    TestDiTokenModule,
    AppPipesModule,
    TestRxjsServiceModule,
  ],
  exports: []
})
export class DevModule { }
