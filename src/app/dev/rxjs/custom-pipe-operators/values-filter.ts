/**
 * Пример фильра на null и undefined. Дописать типизацию
 */

import { Observable } from 'rxjs';

export function valuesFilter() {
  return <T>(source: Observable<T>): Observable<T> => {
    return new Observable(subscriber => {
      // если не возвращать результат, то надо записать в переменную и отписать в конце
      return source.subscribe({
        next(values: any) {
          subscriber.next((values || []).filter(Boolean));
        },
        error(e) {
          subscriber.error(e);
        },
        complete() {
          subscriber.complete();
        }
      });

      // return () => subscription.unsubscribe();
    });
  };
}
