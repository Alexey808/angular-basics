import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UnitTestService} from './unit-test.service';

@Component({
  selector: 'app-unit-test',
  template: 'Counter: {{counter}}'
})
export class UnitTestComponent implements OnInit {
  counter = 0;
  public form: FormGroup;
  items;
  message = '';

  constructor(
    private fb: FormBuilder,
    public service: UnitTestService
  ) {
    // для тестов формы
    this.form = fb.group({
      login: ['', Validators.required],
      email: ['']
    });
  }

  @Output() counterEmitter = new EventEmitter<number>()

  // для теста сервисов
  ngOnInit(): void {
    this.items = this.service.fetch(``);
  }

  increment() {
    this.counter++; // для простого теста
    this.counterEmitter.emit(this.counter); // для теста EventEmmiter
  }

  decrement() {
    this.counter--;
  }

  add(title: string) {
    const item = { title };
    this.service.create(item).subscribe(itemElement => {
      this.items.push(itemElement);
    }, err => this.message = err);
  }
}
