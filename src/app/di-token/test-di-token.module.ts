import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDiTokenComponent } from './test-di-token.component';
import { RouterModule, Routes } from '@angular/router';
import { TestExampleTokenWithLogicComponent } from './example-token-with-logic/test-example-token-with-logic.component';

const routes: Routes = [
  {
    path: '',
    component: TestDiTokenComponent,
    children: [
      {path: 'data/:itemId', component: TestExampleTokenWithLogicComponent}
    ]
  },
];

@NgModule({
  declarations: [
    TestDiTokenComponent,
    TestExampleTokenWithLogicComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    TestDiTokenComponent,
  ]
})
export class TestDiTokenModule { }
