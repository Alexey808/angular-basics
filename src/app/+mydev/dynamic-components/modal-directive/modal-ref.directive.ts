import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appModalRef]'
})
export class ModalRefDirective {

  constructor(
    /* для структурной директивы, с помощь него можно очищать компонент */
    public containerRef: ViewContainerRef
  ) { }

}
