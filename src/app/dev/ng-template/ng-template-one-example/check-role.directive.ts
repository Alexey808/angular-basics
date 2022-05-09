import { Directive, ElementRef, Inject, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { ROLE_PERMISSIONS_PROVIDERS, ROLE_PERMISSIONS_TOKEN } from './ng-template-one-example.token';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appCheckRole]',
  providers: [ROLE_PERMISSIONS_PROVIDERS]
})
export class CheckRoleDirective implements OnInit, OnDestroy {
  destroy: Subject<void> = new Subject<void>();

  constructor(
    @Inject(ROLE_PERMISSIONS_TOKEN) readonly permission$: Observable<boolean>,
    private templateRef: TemplateRef<unknown>,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }


  ngOnInit() {
    this.permission$.pipe(
      takeUntil(this.destroy),
    ).subscribe((hasPermission: boolean) => {
      if (hasPermission) {
        const parent = this.elementRef?.nativeElement?.parentElement;
        const content = this.templateRef?.createEmbeddedView(this.templateRef);
        if (parent && content?.rootNodes?.length) {
          this.renderer.appendChild(parent, content.rootNodes[0]);
        }
      }
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
