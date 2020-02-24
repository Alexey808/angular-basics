import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

interface IControl {
  [key: string]: boolean;
}
export class MyValidator {

  /**
   * Пользовательский валидатор, проверяет на исключения
   */
  static restrictedEmails(control: FormControl): IControl {
    if (['x@mail.ru'].includes(control.value)) {
      return {restrictedEmail: true};
    } else {
      return null;
    }
  }

  /**
   * Пользовательский асинхронный валидатор, проверяет на исключения
   */
  static asyncUniqEmail(control: FormControl): Promise<IControl> | Observable<IControl> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({asyncUniqEmail: true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

}
