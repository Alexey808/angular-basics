import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterControlComponent),
    multi: true
  }]
})
export class CounterControlComponent {
  private _value;

  get value() {
    return this._value;
  }

  @Input() set value(val) {
    this._value = val;
    this.onChange(this._value);
  }

  onChange(_: any) {
    console.log('onChange');
  }

  up() {
    this.value++;
    console.log('up');
  }

  down() {
    this.value--;
    console.log('down');
  }

  writeValue(value: any) {
    this.value = value;
    console.log('writeValue');
  }

  registerOnChange(fn) {
    this.onChange = fn;
    console.log('registerOnChange');
  }

  registerOnTouched() {
    console.log('registerOnTouched');
  }
}
