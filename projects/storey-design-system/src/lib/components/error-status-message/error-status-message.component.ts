import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from '../typography/typography.component';

@Component({
  selector: 'storey-error-status-message',
  standalone: true,
  imports: [CommonModule, TypographyComponent],
  templateUrl: './error-status-message.component.html',
  styleUrls: ['./error-status-message.component.scss']
})
export class ErrorStatusMessageComponent {
  @Input() title: string = 'Error';
  @Input() message: string = 'Ha ocurrido un error al cargar los datos. Por favor, intente nuevamente más tarde.';

} 