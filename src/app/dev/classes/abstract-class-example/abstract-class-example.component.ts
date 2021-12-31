import { Component, OnInit } from '@angular/core';
import { IData, AbstractClassExampleService } from './abstract-class-example.service';
import { AbstractClassExampleLogService } from './abstract-class-example-log.service';

@Component({
  selector: 'app-abstract-class-example',
  templateUrl: './abstract-class-example.component.html',
  styleUrls: []
})
export class AbstractClassExampleComponent implements OnInit {

  constructor(
    private myService: AbstractClassExampleService,
  ) { }

  ngOnInit(): void {
    console.log(1);
    const data: IData = this.myService.setValue({
      valueOne: 'valueOne',
      valueTwo: null,
      valueFour: null
    });
    console.log(5, data);
  }
}
