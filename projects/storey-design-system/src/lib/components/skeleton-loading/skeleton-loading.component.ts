import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storey-skeleton-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-loading.component.html',
  styleUrls: ['./skeleton-loading.component.scss']
})
export class SkeletonLoadingComponent {
  @Input() width: string = '100%';
  @Input() height: string = '24px';
} 