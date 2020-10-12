import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

type IColors = 'red' | 'green' | 'blue' | 'gray';

@Directive({
  selector: '[appFunFour]'
})
export class FunFourDirective implements AfterViewInit {

  @Input() colorName: IColors = 'gray';

  @HostListener('click', ['$event']) onClick(event: Event) {
    event.preventDefault();
    const colors: IColors[] = ['red', 'green', 'blue'];
    const random = Math.floor(Math.random() * Math.floor(colors.length));
    this.colorName = colors[random];
    this.paintText();
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngAfterViewInit() {
    this.paintText();
  }

  private paintText() {
    if (this.el.nativeElement) {
      this.renderer.setStyle(this.el.nativeElement, 'color', this.colorName);
      console.log('set color: ', this.colorName);
    }
  }
}
