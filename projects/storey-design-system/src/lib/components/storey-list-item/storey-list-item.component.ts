import { Component, Input } from '@angular/core';
import { TypographyComponent } from '../typography/typography.component';
import { HighlightPipe } from '../typography/highlight.pipe';

@Component({
  selector: 'storey-list-item',
  standalone: true,
  imports: [TypographyComponent, HighlightPipe],
  templateUrl: './storey-list-item.component.html',
  styleUrls: ['./storey-list-item.component.scss']
})
export class StoreyListItemComponent {
  @Input() title!: string;
  @Input() nis!: string;
  @Input() alias!: string;
  @Input() searchTerm: string = '';
} 