/**
 * Оператор принимает поток, период , который представляет интервал опроса,
 * а также дополнительный начальный момент времени задержки, которое
 * по умолчанию устанавливается в 0
 *
 * use example:
 * polling(this.http.get('https://..'), 10000).subscribe()
 */

import { Observable, timer } from 'rxjs';
import { concatMapTo } from 'rxjs/operators';

export function polling<T>(stream: Observable<T>, period: number, initialDelay = 0) {
  return timer(initialDelay, period).pipe(concatMapTo(stream));
}
