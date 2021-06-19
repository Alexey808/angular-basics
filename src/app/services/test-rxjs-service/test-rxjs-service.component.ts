import { Component, OnInit } from '@angular/core';
import { Item, ItemId, TestRxjsServiceService } from './test-rxjs-service.service';
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

  onCreate() {
    const newItem = {id: 4, value: 'test-4'};
    this.service.onCreate(newItem);
  }

  onDelete(id: ItemId) {
    this.service.onDelete(id);
  }

  onUpdate(item) {
    const updatedItem = {...item, value: `test_${item.value}`};
    this.service.onUpdate(updatedItem);
  }
}
