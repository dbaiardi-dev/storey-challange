import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtml } from '@angular/platform-browser';

export type TypographyColor =
  | 'text-primary'
  | 'text-primary-main'
  | 'text-primary-container'
  | 'text-primary-accent'
  | 'text-on-primary-container'
  | 'text-surface'
  | 'text-neutral-placeholder'
  | 'text-neutral-gray'
  | 'text-neutral-dark-gray'
  | 'text-dark-gray'
  | 'text-middle-gray'
  | 'text-warning';

@Component({
  selector: 'storey-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent {
  @Input() variant: 'heading-lg' | 'heading-md' | 'heading-sm' | 'body-lg' | 'body-md' | 'body-sm' | 'body-sm-2' | 'body-md-2' = 'heading-lg';
  @Input() color?: TypographyColor;
  @Input() fontWeight?: string | number;
  @Input() html?: SafeHtml;

  getClasses(): string[] {
    return [this.variant, this.color].filter(Boolean) as string[];
  }

  getStyle(): { [key: string]: string | number } {
    const style: { [key: string]: string | number } = {};
    if (this.fontWeight) style['font-weight'] = this.fontWeight;
    return style;
  }
} 