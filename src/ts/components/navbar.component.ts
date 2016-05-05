import { Component, Input } from '@angular/core';
import { LayoutComponent } from 'app/components/layout.component';

@Component({
	selector: 'navbar',
	template: `
		<!-- Navbar -->
		<nav class="navbar navbar-full navbar-fixed-top {{ style }}" [class.ls-left-sidebar]="layout.sidebarComponents.length">
			<div [class.container]="!layout.sidebarComponents.length">
				<ng-content></ng-content>
			</div>
		</nav>
		<!-- // END Navbar -->
	`
})

export class NavbarComponent {
	@Input() style: string = 'navbar-dark bg-primary';

	constructor(private layout: LayoutComponent) {}
}