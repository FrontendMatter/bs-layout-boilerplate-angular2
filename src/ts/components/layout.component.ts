import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { SidebarComponent } from 'app/components/sidebar.component';

@Component({
	selector: 'layout',
	template: `
		<!-- Layout container -->
		<div class="layout-container ls-top-navbar">

			<ng-content select="navbar"></ng-content>

			<ng-content select="sidebar"></ng-content>

			<!-- Content -->
			<div class="layout-content" data-scrollable>
				<div [class.container]="type === 'fixed'" 
					 [class.container-fluid]="type === 'fluid'">

					<ng-content></ng-content>

				</div>
			</div> <!-- // END Content -->
		</div> <!-- // END Layout container -->
	`
})

export class LayoutComponent implements AfterContentInit {
	@Input() type: string;
	@ContentChildren(SidebarComponent) sidebarComponents: QueryList<SidebarComponent>

	ngAfterContentInit() {
		if(this.sidebarComponents.length) {
			// BootstrapLayout.Sidebar.init();
		}
	}
}