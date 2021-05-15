import { AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { TEST_DI_TOKEN } from './tokens/di-token';
import { WINDOW } from './tokens/window-token';
import { MY_DOCUMENT } from './tokens/document-token';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-di-token',
  templateUrl: './test-di-token.component.html',
})
export class TestDiTokenComponent implements OnInit, AfterViewInit {

  @ViewChild('container') private container: ElementRef;

  result: string;

  constructor(
    @Inject(TEST_DI_TOKEN) readonly testDiToken: string,
    @Inject(WINDOW) readonly windowToken: Window,
    @Inject(MY_DOCUMENT) readonly myDocument,
    private renderer: Renderer2,
    private activatedRoute: ActivatedRoute,
  ) {
    // console.log('windowToken: ', windowToken);
  }

  ngOnInit(): void {
    this.result = this.testDiToken;
  }

  ngAfterViewInit(): void {
    const element = this.renderer.createElement('div');
    const text = this.renderer.createText('text');

    this.renderer.appendChild(element, text);
    this.renderer.appendChild(this.container.nativeElement, element);
  }

}
