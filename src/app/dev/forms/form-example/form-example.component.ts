import { Component, OnInit } from '@angular/core';
import { FormExample, TodoFields } from './form-example.form';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent extends FormExample implements OnInit {
  public todoFields: typeof TodoFields = TodoFields;
  public isShowFormValues: boolean = false;
  constructor() {
    super();
  }

  ngOnInit(): void {}

  showLog() {
    console.log(this.formGroup.getRawValue());
  }
}
