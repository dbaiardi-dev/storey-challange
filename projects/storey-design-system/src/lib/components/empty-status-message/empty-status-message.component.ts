import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { TypographyComponent } from '../typography/typography.component';

@Component({
  selector: 'storey-empty-status-message',
  standalone: true,
  imports: [CommonModule, CardComponent, TypographyComponent],
  templateUrl: './empty-status-message.component.html',
  styleUrls: ['./empty-status-message.component.scss']
})
export class EmptyStatusMessageComponent {

} 