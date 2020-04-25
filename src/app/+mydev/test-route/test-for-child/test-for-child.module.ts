import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TestForChildComponent} from './test-for-child.component';
import {ChildComponent} from './child/child.component';

const route: Routes = [
  {
    path: '',
    component: TestForChildComponent,
    children: [
      { path: 'child', component: ChildComponent}
    ]
  }
];

@NgModule({
  declarations: [
    TestForChildComponent,
    ChildComponent
  ],
  imports: [
    RouterModule.forChild(route),
    CommonModule
  ],
  exports: [
    // RouterModule,
    TestForChildComponent,
    ChildComponent
  ]
})
export class TestForChildModule { }
