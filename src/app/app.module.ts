import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MycardModule} from './mydev/mycard/mycard.module';
import {MycardEditModule} from './mydev/mycard-edit/mycard-edit.module';
import { TestContentComponent } from './mydev/test-content/test-content.component';
import { ContentComponent } from './mydev/test-content/content/content.component';
import { TestDirectiveDirective } from './mydev/test-directive/test-directive.directive';
import { MyIfDirective } from './mydev/test-struct-directive/myif.directive';
import { TestPipeComponent } from './mydev/test-pipe/test-pipe.component';
import { MypipePipe } from './mydev/mypipe/mypipe.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PipeFilterPipe} from './mydev/pipe-filter/pipe-filter.pipe';
import { TestRoutePageComponent } from './mydev/test-route/test-route-page/test-route-page.component';
import { TestRoutePage1Component } from './mydev/test-route/test-route-page1/test-route-page1.component';
import { TestRoutePage2Component } from './mydev/test-route/test-route-page2/test-route-page2.component';
import { RoutItemComponent } from './mydev/test-route/rout-item/rout-item.component';
import { TestRoutePage2ChildComponent } from './mydev/test-route/test-route-page2/test-route-page2-child/test-route-page2-child.component';
import { TestErrorPageComponent } from './mydev/test-route/test-error-page/test-error-page.component';
// import { TestGuardComponent } from './mydev/test-route/test-guard/test-guard.component';
import {FormModule} from './mydev/form/form.module';
import {HttpClientTestModule} from './mydev/http-client/http-client-test.module';
import {DynamicComponentsModule} from './mydev/dynamic-components/dynamic-components.module';
import {TestResolverModule} from './mydev/resolvers/test-resolver.module';


@NgModule({
  declarations: [
    AppComponent,
    TestContentComponent,
    ContentComponent,
    TestDirectiveDirective,
    MyIfDirective,
    TestPipeComponent,
    MypipePipe,
    PipeFilterPipe,
    PipeFilterPipe,
    TestRoutePageComponent,
    TestRoutePage1Component,
    TestRoutePage2Component,
    RoutItemComponent,
    TestRoutePage2ChildComponent,
    TestErrorPageComponent,
    // TestGuardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MycardModule,
    MycardEditModule,
    ReactiveFormsModule,
    FormsModule,
    FormModule,
    HttpClientTestModule,
    DynamicComponentsModule,
    TestResolverModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
