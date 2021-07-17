/**
 * Фильтр на null и undefined для объектов
 */

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

export function valueFilter() {
  return <T>(source: Observable<T>) => {
    return source.pipe(filter(value => value !== undefined && value !== null));
  };
}
