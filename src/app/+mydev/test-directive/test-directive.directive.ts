import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {
  @Input() color = 'red';
  @HostBinding('style.color') elColor = null;

  constructor(
    // private elRef: ElementRef,
    // private renderer: Renderer2
  ) {}

  @HostListener('click', ['$event.target']) onCLick(event: Event) {
      console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color); // 1 вариант
    this.elColor = this.color; // 2 вариант
  }

  @HostListener('mouseleave') onLeave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', null); // 1 вариант
    this.elColor = null; // 2 вариант
  }

  @HostListener('document:keydown.enter', ['$event.target']) enter(event: Event) {
    console.log('ENTER -> ', event);
  }
}
