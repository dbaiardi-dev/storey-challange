import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from "../typography/typography.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'storey-tag',
  standalone: true,
  imports: [CommonModule, TypographyComponent, FontAwesomeModule, FaIconComponent],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input() icon?: IconDefinition;
  @Input() label?: string;
} 