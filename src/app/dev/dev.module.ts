import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDiTokenModule } from './di-token/test-di-token.module';
import { AppPipesModule } from './pipes/app-pipes.module';
import { TestRxjsServiceModule } from './services/test-rxjs-service/test-rxjs-service.module';
import { RestApiModule } from './rest-api/rest-api.module';
import { ControlValueAccessorExampleComponent } from './forms/control-value-accessor-example/control-value-accessor-example.component';


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
