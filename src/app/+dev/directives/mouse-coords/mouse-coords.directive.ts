import { Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil} from 'rxjs/operators';

@Directive({
  selector: '[appMouseCoords]'
})
export class MouseCoordsDirective implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  mouseEvents$ = new BehaviorSubject(null);

  @Output() eventMouseMove = new EventEmitter();
  @Output() eventMouseOver = new EventEmitter<boolean>()

  ngOnInit(): void {
    this.mouseEvents$.pipe(
      distinctUntilChanged(),
      takeUntil(this.unsubscribe$)
    ).subscribe((event) => {
      this.eventMouseMove.emit(event);
    });
  }

  @HostListener('mouseenter') onEnter() {
    this.eventMouseOver.emit(true);
  }

  @HostListener('mouseleave') onLeave() {
    this.eventMouseOver.emit(false);
  }

  @HostListener('mousemove', ['$event']) onMove(e) {
    this.mouseEvents$.next(e);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
