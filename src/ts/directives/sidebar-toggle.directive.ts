import { Directive } from '@angular/core';
import { sidebarToggle } from 'bootstrap-layout';

@Directive({
	selector: '[sidebar-toggle]',
	host: {
		'(click)': 'onClick($event)'
	}
})

export class SidebarToggleComponent {
	onClick(e): void {
		sidebarToggle._onClick(e)
	}
}