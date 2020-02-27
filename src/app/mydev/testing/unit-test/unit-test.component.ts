import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-unit-test',
  template: 'Counter: {{counter}}'
})
export class UnitTestComponent {
  counter = 0;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    // для тестов формы
    this.form = fb.group({
      login: ['', Validators.required],
      email: ['']
    });
  }

  @Output() counterEmitter = new EventEmitter<number>()

  increment() {
    this.counter++; // для простого теста
    this.counterEmitter.emit(this.counter); // для теста EventEmmiter
  }

  decrement() {
    this.counter--;
  }
}
