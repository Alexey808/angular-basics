import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestModalComponent} from './test-modal/test-modal.component';
import {ModalRefDirective} from './modal-directive/modal-ref.directive';
import {ModalComponent} from './modal/modal.component';


@NgModule({
  declarations: [
    TestModalComponent,
    ModalRefDirective,
    ModalComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestModalComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class DynamicComponentsModule { }
