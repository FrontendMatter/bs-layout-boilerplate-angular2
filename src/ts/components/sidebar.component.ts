import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Sidebar } from 'bootstrap-layout';

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
		Sidebar.initSidebar('#sidebar');
	}
	ngOnDestroy(): void {
		Sidebar.destroySidebar('#sidebar');
	}
}