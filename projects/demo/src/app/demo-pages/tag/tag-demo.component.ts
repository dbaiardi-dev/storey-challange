import { Component } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagComponent } from 'storey-design-system';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'storey-tag-demo',
  standalone: true,
  imports: [TagComponent, FontAwesomeModule],
  templateUrl: './tag-demo.component.html',
  styleUrls: ['./tag-demo.component.scss']
})
export class TagDemoComponent {
  faArrowUp = faArrowUp;
} 