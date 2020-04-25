import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestResolverComponent} from './test-resolver/test-resolver.component';
// import {RouterModule} from '@angular/router';
// import {TestResolver} from './test-resolver.resolver';


@NgModule({
  declarations: [
    TestResolverComponent
  ],
  imports: [
    CommonModule,
    // /* примерно так выглядит его подключение к роуту, в текущем примере он в основном роут модуле */
    // RouterModule.forChild([
    //   {
    //     path: 'test-resolver/:id',
    //     component: TestResolverComponent,
    //     resolve: {
    //       item: TestResolver
    //     }
    //   },
    // ])
  ],
  exports: [
    TestResolverComponent
  ]
})
export class TestResolverModule { }
