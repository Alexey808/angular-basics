import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor-example',
  templateUrl: './control-value-accessor-example.component.html',
  styleUrls: ['./control-value-accessor-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlValueAccessorExampleComponent {
  // form: FormGroup = this.fb.group({
  //   inputValue: 'testInputValue',
  // });
  inputValue: number = 0;

  constructor(
    private fb: FormBuilder,
  ) { }

  // checkValue() {
  //   console.log(this.form.getRawValue());
  // }
  changedValue(event: Event) {
    console.log('changeEvent -> ', event);
  }
}
