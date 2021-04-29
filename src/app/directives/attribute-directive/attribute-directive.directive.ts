import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]'
})
export class AttributeDirectiveDirective implements AfterViewInit {
  @Input() public appAttributeDirective: boolean;

  constructor(
    // private templateRef: TemplateRef<any>,
    private elementRef: ElementRef,
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2,
  ) { }


ngAfterViewInit(): void {
    console.log('--->', this.appAttributeDirective);
    if (this.appAttributeDirective) {
      const messageElement = this.renderer.createElement('p');
      this.renderer.createText('test');
      this.renderer.appendChild(this.elementRef.nativeElement, messageElement);
    }
  }
}
