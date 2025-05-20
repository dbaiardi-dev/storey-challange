import { Component, OnInit } from '@angular/core';
import { CardSupplySelectorComponent, Supply, ErrorStatusMessageComponent } from 'storey-design-system';
import { CommonModule } from '@angular/common';
import { SupplyService } from '../../services/supply.service';
import { GlobalErrorService } from '../../services/global-error.service';

@Component({
  selector: 'storey-card-demo',
  standalone: true,
  imports: [CardSupplySelectorComponent, CommonModule, ErrorStatusMessageComponent],
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.scss']
})
export class CardDemoComponent implements OnInit {
  supplies: Supply[] = [];
  errorSignal = this.globalErrorService.getError();

  constructor(private supplyService: SupplyService, private globalErrorService: GlobalErrorService) { }

  ngOnInit(): void {
    this.supplyService.getSupplies().subscribe({
      next: (supplies) => {
        this.supplies = supplies;
      },
      error: (error) => {
        console.error('Error al obtener supplies:', error);
        this.supplies = [];
      }
    });
  }
} 