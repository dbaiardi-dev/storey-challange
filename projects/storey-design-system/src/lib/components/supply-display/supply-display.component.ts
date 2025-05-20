import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from '../typography/typography.component';
import { StoreyListItemComponent } from '../storey-list-item/storey-list-item.component';

export interface Supply {
  id: number;
  associatedSupply: string;
  address: string;
  locality: string;
  alias: string;
  nis: string;
  status: 'active' | 'inactive';
}


@Component({
  selector: 'storey-supply-display',
  standalone: true,
  imports: [CommonModule, TypographyComponent, StoreyListItemComponent],
  templateUrl: './supply-display.component.html',
  styleUrls: ['./supply-display.component.scss']
})
export class SupplyDisplayComponent {
  @Input() supplies: Supply[] = [];
  @Input() searchQuery: string = '';
  @Output() supplySelected = new EventEmitter<Supply>();

  onSupplyClick(supply: Supply) {
    this.supplySelected.emit(supply);
  }
} 