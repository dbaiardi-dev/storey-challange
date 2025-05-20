import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'storey-supply-search',
  templateUrl: './supply-search.component.html',
  styleUrls: ['./supply-search.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule]
})
export class SupplySearchComponent {
  @Input() supplies: any[] = [];
  @Output() filtered = new EventEmitter<{ results: any[], query: string }>();

  query: string = '';
  faSearch = faSearch;

  constructor(library: FaIconLibrary) {
    library.addIcons(faSearch);
  }

  onSearchChange() {
    const query = this.query.toLowerCase().trim();
    if (!query) {
      this.filtered.emit({ results: [], query: '' });
      return;
    }
    const filteredResults = this.supplies.filter(supply =>
      supply.address?.toLowerCase().includes(query) ||
      supply.nis?.toLowerCase().includes(query) ||
      supply.alias?.toLowerCase().includes(query)
    );
    this.filtered.emit({ results: filteredResults, query });
  }
} 