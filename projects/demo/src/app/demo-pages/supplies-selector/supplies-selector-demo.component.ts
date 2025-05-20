import { Component, Input } from '@angular/core';
import { SuppliesSelectorComponent, Supply } from 'storey-design-system';

@Component({
  selector: 'storey-supplies-selector-demo',
  standalone: true,
  imports: [SuppliesSelectorComponent],
  templateUrl: './supplies-selector-demo.component.html',
  styleUrls: ['./supplies-selector-demo.component.scss']
})
export class SuppliesSelectorDemoComponent {
  @Input() position: 'up' | 'down' = 'down';
  supplies: Supply[] = [
    { id: 1, associatedSupply: 'Water', address: 'str Liberty Avenue 2025', locality: 'Locality Name', alias: 'Company', nis: '123456789', status: 'active' },
    { id: 2, associatedSupply: 'Gas', address: 'str Freedom Street 1234', locality: 'Another Locality', alias: 'Business', nis: '987654321', status: 'active' },
    { id: 3, associatedSupply: 'Electricity', address: 'str Main Road 5678', locality: 'Central', alias: 'Home', nis: '123456789', status: 'active' },
    { id: 4, associatedSupply: 'Water', address: 'str Liberty Avenue 2025', locality: 'Locality Name', alias: 'Company', nis: '123456789', status: 'active' },
    { id: 5, associatedSupply: 'Gas', address: 'str Freedom Street 1234', locality: 'Another Locality', alias: 'Business', nis: '987654321', status: 'active' },
    { id: 6, associatedSupply: 'Electricity', address: 'str Main Road 5678', locality: 'Central', alias: 'Home', nis: '123456789', status: 'active' },
  ];
} 