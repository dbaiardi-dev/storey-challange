import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from "../typography/typography.component";
import { CardComponent } from '../card/card.component';
import { SupplyDisplayComponent } from '../supply-display/supply-display.component';
import { SupplySearchComponent } from '../supply-search/supply-search.component';
import { Supply } from '../supply-display/supply-display.component';

/**
 * SuppliesSelectorComponent allows the user to select a supply from a list.
 * Includes filtering and emits the selected supply to the parent component.
 */
@Component({
  selector: 'storey-supplies-selector',
  standalone: true,
  imports: [
    CommonModule,
    SupplyDisplayComponent,
    SupplySearchComponent,
    TypographyComponent,
    CardComponent
  ],
  templateUrl: './supplies-selector.component.html',
  styleUrls: ['./supplies-selector.component.scss']
})
export class SuppliesSelectorComponent implements OnInit, OnChanges {
  @Input() supplies: Supply[] = [];

  /**
   * Position of the dropdown related to its container.
   * Can be `'up'` or `'down'`. Default is `'down'`.
   */
  @Input() position?: 'up' | 'down' = 'down';

  /** Event emitted when a supply is selected. */
  @Output() supplySelected = new EventEmitter<Supply>();

  filteredSupplies: Supply[] = [];
  searchQuery: string = '';
  selectedSupply: Supply | null = null;

  ngOnInit() {
    this.filteredSupplies = [];
  }

  /**
   * Lifecycle hook that runs when any data-bound property changes.
   * If the supplies list changes, it updates the filtered list.
   *
   * @param changes - Object containing the changes of input properties.
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['supplies']) {
      this.filteredSupplies = this.supplies;
    }
  }

  /**
   * Handles the click on a supply item.
   * Sets the selected supply and emits it to the parent.
   *
   * @param supply - The supply item that was clicked.
   */
  onSupplyClick(supply: Supply) {
    this.selectedSupply = supply;
    this.supplySelected.emit(supply);
  }

  /**
   * Handles the selection of a supply from a child component
   * and emits it to the parent.
   *
   * @param supply - The supply that was selected.
   */
  onSupplySelected(supply: Supply) {
    this.supplySelected.emit(supply);
  }

  /**
   * Updates the filtered supplies list and the search query
   * when the user types in the search input.
   *
   * @param event - Object containing the filtered results and the current query.
   */
  onFilteredSuppliesChange(event: { results: Supply[], query: string }) {
    this.filteredSupplies = event.results;
    this.searchQuery = event.query;
  }
} 