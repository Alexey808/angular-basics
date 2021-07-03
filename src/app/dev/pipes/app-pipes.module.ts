import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCurrencyPipe } from './my-currency/my-currency.pipe';
import { MyCurrencyComponent } from './my-currency/my-currency.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MyCurrencyComponent,
  }
];

@NgModule({
  declarations: [
    MyCurrencyPipe,
    MyCurrencyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    MyCurrencyPipe,
    MyCurrencyComponent,
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'ru-RU' }
  ],
})
export class AppPipesModule { }
