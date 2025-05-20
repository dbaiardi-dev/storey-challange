import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TypographyComponent } from "../typography/typography.component";

@Component({
  selector: 'storey-add-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TypographyComponent],
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent {
  @Input() label: string = 'Asociar Suministro';
  @Input() icon: IconDefinition = faPlus;
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
} 