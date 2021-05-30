import { Component, OnInit } from '@angular/core';
import { TestRxjsServiceService } from './test-rxjs-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-rxjs-service',
  templateUrl: './test-rxjs-service.component.html',
  styleUrls: ['./test-rxjs-service.component.scss']
})
export class TestRxjsServiceComponent implements OnInit {

  constructor(
    private service: TestRxjsServiceService,
  ) { }

  get data$(): Observable<any> {
    return this.service.dataSubject;
  }

  ngOnInit(): void {
  }

  updateItem(id: number) {
    console.log('updateItem');
    this.service.updateItem(id);
  }
}
