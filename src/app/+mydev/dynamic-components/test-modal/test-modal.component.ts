import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {ModalRefDirective} from '../modal-directive/modal-ref.directive';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent {
  @ViewChild(ModalRefDirective) refDir: ModalRefDirective;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  openModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    const component = this.refDir.containerRef.createComponent(modalFactory);

    component.instance.title = 'Test-modal';
    component.instance.closeModal.subscribe(() => {
      this.refDir.containerRef.clear();
    });
  }
}
