import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCurrencyPipe } from './my-currency/my-currency.pipe';
import { MyCurrencyComponent } from './my-currency/my-currency.component';



@NgModule({
  declarations: [
    MyCurrencyPipe,
    MyCurrencyComponent,
  ],
  imports: [
    CommonModule
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
