import { Component, AfterViewInit, OnDestroy } from '@angular/core';

declare var BootstrapLayout: any;

@Component({
	selector: 'sidebar',
	template: `
		<!-- Sidebar -->
		<div class="sidebar sidebar-dark bg-primary" id="sidebar" data-scrollable>

			<ng-content></ng-content>

		</div>
		<!-- // END Sidebar -->
	`
})

export class SidebarComponent implements AfterViewInit, OnDestroy {
	ngAfterViewInit(): void {
		BootstrapLayout.Sidebar.initSidebar('#sidebar');
	}
	ngOnDestroy(): void {
		BootstrapLayout.Sidebar.destroySidebar('#sidebar');
	}
}