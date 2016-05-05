import { Directive } from '@angular/core';
import { Sidebar } from 'bootstrap-layout';

declare var jQuery: any;

@Directive({
	selector: '[sidebar-toggle]',
	host: {
		'(click)': 'onClick($event)'
	}
})

export class SidebarToggleComponent {
	onClick(e): void {
		e.stopPropagation()
		const target = jQuery(e.currentTarget).data('target')
		const sidebar = jQuery(target)
		if (sidebar) {
			Sidebar.toggle(sidebar)
		}
	}
}