import { Directive, EventEmitter, Inject, OnInit, Optional, Output, Self } from '@angular/core';
import { CounterDirective, CounterService } from './counter.directive';

@Directive({
  selector: '[appIndexCounter]'
})
export class IndexCounterDirective implements OnInit {
  @Output() index: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private service: CounterService,
  ) {}

  ngOnInit() {
    if (this.service.isIncrement) {
      this.service.increment();
    }
    if (this.service.isReset) {
      this.service.reset();
    }
    this.index.emit(this.service.number);
  }
}
