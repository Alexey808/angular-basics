import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidator} from './my.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        MyValidator.restrictedEmails
      ], [
        MyValidator.asyncUniqEmail
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      select: new FormGroup({
        item: new FormControl('none'),
        selected: new FormControl('none')
      }),
      additions: new FormArray([])
    });
  }

  submit() {
    const formData = {...this.form.value};
    console.log(formData);
  }

  onSelected() {
    const selected = this.form.get('select').value.item;
    this.form.patchValue({select: {selected}});
  }

  onAddField() {
    const control = new FormControl('', Validators.required);
    (this.form.get('additions') as FormArray).push(control);
  }

  getAdditionsControls() {
    return (this.form.get('additions') as FormArray).controls;
  }

}
