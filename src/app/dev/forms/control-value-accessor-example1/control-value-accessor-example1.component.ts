import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor-example1',
  templateUrl: './control-value-accessor-example1.component.html',
  styleUrls: ['./control-value-accessor-example1.component.scss']
})
export class ControlValueAccessorExample1Component implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      counter: 5
    });
  }
}
