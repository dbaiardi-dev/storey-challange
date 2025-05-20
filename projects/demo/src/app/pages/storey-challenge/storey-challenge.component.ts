import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Supply, SupplyService } from '../../services/supply.service';
import { GlobalErrorService } from '../../services/global-error.service';
import { AddButtonComponent, SkeletonLoadingComponent, CardSupplySelectorComponent, ErrorStatusMessageComponent } from 'storey-design-system';

@Component({
  selector: 'storey-challenge',
  standalone: true,
  imports: [CommonModule, AddButtonComponent, SkeletonLoadingComponent, CardSupplySelectorComponent, ErrorStatusMessageComponent],
  templateUrl: './storey-challenge.component.html',
  styleUrls: ['./storey-challenge.component.scss']
})
export class StoreyChallengeComponent implements OnInit {
  supplies: Supply[] = [];
  showContextMenu = false;  
  loading = this.supplyService.getLoadingState();
  errorMessage = this.globalErrorService.getError();

  constructor(private router: Router, private supplyService: SupplyService, private globalErrorService: GlobalErrorService) { }

  get errorSignal() {
    return this.errorMessage;
  }

  ngOnInit() {
    this.supplyService.getSupplies().subscribe({
      next: (supplies) => {
        this.supplies = supplies;
      },
      error: (error) => {
        console.error('Error al obtener supplies:', error);
      }
    });
  }

  clearError() {
    this.globalErrorService.clearError();
  }

  onExitChallenge() {
    this.router.navigateByUrl('/');
  }

  onOpenContextMenu() {
    this.showContextMenu = true;
  }

  onCloseContextMenu() {
    this.showContextMenu = false;
  }

  onEditAlias() {
    this.showContextMenu = false;
  } 

  onUnlinkSupply() {
    this.showContextMenu = false;
  }

  addSupply() {
    console.log('addSupply');
  }
} 