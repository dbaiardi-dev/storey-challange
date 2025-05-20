import { Component, Input, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { TypographyComponent } from '../typography/typography.component';
import { TagComponent } from '../tag/tag.component';
import { SuppliesSelectorComponent } from '../supplies-selector/supplies-selector.component';
import { SupplyContextMenuComponent } from '../supply-context-menu/supply-context-menu.component';
import { Supply } from '../../models/supply.model';
import { faCog, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmptyStatusMessageComponent } from '../empty-status-message/empty-status-message.component';
import { ErrorStatusMessageComponent } from '../error-status-message/error-status-message.component';
import { GlobalErrorService } from 'projects/demo/src/app/services/global-error.service';
import { SkeletonLoadingComponent } from '../skeleton-loading/skeleton-loading.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'storey-card-supply-selector',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    TypographyComponent,
    TagComponent,
    FontAwesomeModule,
    SuppliesSelectorComponent,
    SupplyContextMenuComponent,
    EmptyStatusMessageComponent,
    ErrorStatusMessageComponent,
    SkeletonLoadingComponent,
    ModalComponent
  ],
  templateUrl: './card-supply-selector.component.html',
  styleUrls: ['./card-supply-selector.component.scss']
})
export class CardSupplySelectorComponent implements OnInit {
  @Input() icon?: IconDefinition;
  @Input() supplies: Supply[] = [];
  @Input() loading: boolean = false;

  faCog = faCog;
  faArrowUp = faArrowUp;
  selectedSupply: Supply | null = null;
  nosSelectedSupplies: Supply[] = [];
  showContextMenu = false;
  errorMessage: string | null = null;
  isMobile: boolean = false;

  constructor(private globalErrorService: GlobalErrorService) {
    effect(() => {
      this.errorMessage = this.globalErrorService.getError()();
      console.log('UI errorMessage:', this.errorMessage);
    });
    this.isMobile = window.matchMedia('(max-width: 768px)').matches;
    window.addEventListener('resize', () => {
      this.isMobile = window.matchMedia('(max-width: 768px)').matches;
    });
  }

  ngOnInit(): void {
    if (this.supplies.length > 0) {
      this.selectedSupply = this.supplies[0];
      this.nosSelectedSupplies = this.supplies.slice(1);
    }
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
    if (this.selectedSupply) {
      this.supplies = this.supplies.filter(s => s !== this.selectedSupply);
      if (this.supplies.length > 0) {
        this.selectedSupply = this.supplies[0];
        this.nosSelectedSupplies = this.supplies.slice(1);
      } else {
        this.selectedSupply = null;
        this.nosSelectedSupplies = [];
        this.supplies = [];
      }
      this.showContextMenu = false;
    }
  }

  onSupplySelect(supply: Supply) {
    this.selectedSupply = supply;
    this.nosSelectedSupplies = this.supplies.filter(s => s !== supply);
  }
}

 