import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

type VoidFunction = () => void;

@Component({
  selector: 'app-control-value-accessor-example',
  templateUrl: './control-value-accessor-example.component.html',
  styleUrls: ['./control-value-accessor-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlValueAccessorExampleComponent),
      multi: true,
    }
  ]
})
export class ControlValueAccessorExampleComponent implements ControlValueAccessor {
  public form = new FormGroup({
    testStr: new FormControl(''),
  });

  private onChange: (value: string) => void;
  private onTouched: () => void;
  disabled: boolean;
  value = '';

  constructor() { }

  writeValue(value: string): void {
    this.value = value;
    console.log(value);
  }

  registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: VoidFunction): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateValue(value: string) {
    console.log('updateValue', value);
  }
}
