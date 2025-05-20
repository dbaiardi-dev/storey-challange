import { Component, Input } from '@angular/core';

@Component({
    selector: 'storey-tooltip',
    standalone: true,
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
    @Input() message: string = '';
} 