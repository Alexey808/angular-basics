import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type VoidFunction = () => void;

/**
 * onChange → the callback function to register on UI change
 * onTouch → the callback function to register on element touch
 * set value(val: any) → sets the value used by the ngModel of the element
 * writeValue(value: any) → This will write the value to the view if the the value changes occur on the model programmatically
 * registerOnChange(fn: any) → When the value in the UI is changed, this method will invoke a callback function
 * registerOnTouch(fn: any) → When the element is touched, this method will get called
 */

@Component({
  selector: 'app-cva-input-field',
  templateUrl: './cva-input-field.component.html',
  styleUrls: ['./cva-input-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CvaInputFieldComponent),
      multi: true,
    }
  ]
})
export class CvaInputFieldComponent implements ControlValueAccessor {
  _value: string = '';

  set value(value: string) {
    this._value = value;
    this.onTouched(value);
    this.onChange(value);
  }

  get value(): string {
    return this._value;
  }
  // onChange: (value: number) => void;
  // onTouched: () => void;

  constructor() { }

  onChange(value: string): void {
    console.log('onChange', value);
  }
  onTouched(value: string): void {}

  /** 1) implement ControlValueAccessor */
  registerOnChange(fn: VoidFunction): void {
    this.onChange = fn;
  }

  /** 2) implement ControlValueAccessor
   * Вызывается при blur событиях (control помечается флагом touched)
   */
  registerOnTouched(fn: VoidFunction): void {
    this.onTouched = fn;
  }

  /** 3) implement ControlValueAccessor */
  writeValue(value: string): void {
    this.value = value;
    console.log('writeValue -> ', value);
  }

  /** 4) optional implement ControlValueAccessor
   * Вызывается при создании 'new ControlValue' и 'setValue()'
   */
  setDisabledState(isDisabled: boolean): void {
    console.log('setDisabledState -> ', isDisabled);
  }
}
