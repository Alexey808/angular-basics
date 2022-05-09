import { AfterViewInit, Component, Inject, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ROLE_PERMISSIONS_PROVIDERS, ROLE_PERMISSIONS_TOKEN } from './ng-template-one-example.token';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ng-template-one-example',
  templateUrl: './ng-template-one-example.component.html',
  providers: [ROLE_PERMISSIONS_PROVIDERS],
})
export class NgTemplateOneExampleComponent implements AfterViewInit {
  @ViewChild('tpl', {read: TemplateRef}) tpl: TemplateRef<unknown>;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

  constructor(
    @Inject(ROLE_PERMISSIONS_TOKEN) readonly permission$: Observable<boolean>,
  ) { }

  ngAfterViewInit() {
    this.vc.createEmbeddedView(this.tpl);
  }

}
