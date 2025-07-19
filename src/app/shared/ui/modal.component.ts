import { Dialog } from '@angular/cdk/dialog';
import {
  Component,
  contentChild,
  effect,
  inject,
  input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  template: ` <div></div> `,
})
export default class ModalComponent {
  dialog = inject(Dialog);
  isOpen = input.required<boolean>();
  template = contentChild.required(TemplateRef);

  constructor() {
    effect(() => {
      const isOpen = this.isOpen();

      if (isOpen) {
        this.dialog.open(this.template(), {
          panelClass: 'dialog-container',
          hasBackdrop: false,
        });
      } else {
        this.dialog.closeAll();
      }
    });
  }
}
