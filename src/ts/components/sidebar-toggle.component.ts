import { Directive, ElementRef } from '@angular/core';
import { Sidebar } from 'bootstrap-layout';

declare var jQuery: any;

@Directive({
	selector: '[sidebar-toggle]',
	host: {
		'(click)': 'onClick($event)'
	}
})

export class SidebarToggleComponent {
	private el: HTMLElement;

	constructor(el: ElementRef) {
		this.el = el.nativeElement
	}
	
	onClick(e): void {
		e.stopPropagation()
		const target = jQuery(e.currentTarget).data('target')
		const sidebar = jQuery(target)
		if (sidebar) {
			Sidebar.toggle(sidebar)
		}
	}
}