import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storey-modal',
  standalone: true,
  template: `
    <div class="modal-backdrop" (click)="onBackdropClick()"></div>
    <div class="modal-content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  onBackdropClick() { this.close.emit(); }
} 