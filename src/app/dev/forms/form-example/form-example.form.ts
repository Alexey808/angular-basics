import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface ITodo {
  id?: string;
  title: string;
  date: string;
  done: boolean;
}

export enum TodoFields {
  id = 'id',
  title = 'title',
  date = 'date',
  done = 'done',
}

export class FormExample {
  public formGroup: FormGroup = new FormGroup({
    [TodoFields.title]: new FormControl(null, [Validators.required]),
    [TodoFields.date]: new FormControl(null, []),
    [TodoFields.done]: new FormControl(null, []),
  }, []);

  public get isEmptyFormFields(): boolean {
    const { title, date, done } = this.formGroup.getRawValue();
    const invalid: boolean = this.formGroup.invalid;

    return (!(title || date || done) || invalid);
  }

  public getFormValues() {
    // TODO дописать прочитав medium.com/@lopatsin1990/typescript-%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0-keyof-%D0%B8-in-key-in-586ebe8e6460
    const data: ITodo = this.formGroup.getRawValue() as ITodo;

    // return (Object.keys(data) as (keyof ITodo)[]).reduce(
    //   (result: ITodo[], key: keyof ITodo ) => {
    //     const result: string | undefined = data[key]
    //     return result;
    //   }, {}
    // );
  }
}


