import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {
  // constructor(@Inject(LOCALE_ID) private locale: string) {}
  transform(value): string {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      currencyDisplay: 'symbol', // тип отображения строка/символ
      useGrouping: true, // разделитель
      minimumFractionDigits: 0 // количество знаков после запятой
    }).format(value);
  }
}
