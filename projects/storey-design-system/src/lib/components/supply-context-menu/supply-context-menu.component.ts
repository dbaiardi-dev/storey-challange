import { Component, Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare, faUnlink, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'supply-context-menu',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './supply-context-menu.component.html',
  styleUrls: ['./supply-context-menu.component.scss']
})
export class SupplyContextMenuComponent {
  faPenToSquare = faPenToSquare;
  faUnlink = faUnlink;
  faTimes = faTimes;

  @Output() close = new EventEmitter<void>();
  @Output() editAlias = new EventEmitter<void>();
  @Output() unlink = new EventEmitter<void>();

  onClose() { this.close.emit(); }
  onEditAlias() { this.editAlias.emit(); }
  onUnlink() { this.unlink.emit(); }
} 