import { Component } from '@angular/core';

/*
Shared worker на момент написание этого примера сырой. Нету типизации в lib.dom.d.ts.
Можно костылить с @types/sharedworker.

ng serve не работает с воркерами, актуальную информацию читаем тут https://angdev.ru/doc/service-workers/
 */

@Component({
  selector: 'app-worker-examples',
  templateUrl: './worker-examples.component.html',
  styleUrls: ['./worker-examples.component.scss']
})
export class WorkerExamplesComponent {
  serviceWorker: Worker = new Worker('./service-worker-example.ts', {
    type: 'module',
  });
  resultServiceWorker: number | null = null;

  constructor() {}

  public runServiceWorker(): void {
    this.serviceWorker.onmessage = (event: MessageEvent) => {
      this.resultServiceWorker = event.data;
    };

    this.serviceWorker.onerror = (error: ErrorEvent) => {
      console.error(error);
    };
  }

  public terminateServiceWorker(): void {
    this.serviceWorker.terminate();
  }
}


