import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'storey-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() border: boolean = true;
  @Input() functionality: boolean = false;
  @Input() collapsible: boolean = false;
  @Input() mode: 'default' | 'warning' = 'default';

  isExpanded = false;
  faChevronDown = faChevronDown;

  toggleCollapse() {
    this.isExpanded = !this.isExpanded;
  }
} 