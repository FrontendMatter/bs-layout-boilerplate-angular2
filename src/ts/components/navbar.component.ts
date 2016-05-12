import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { LayoutComponent } from 'app/components/layout.component';

@Component({
	selector: 'navbar',
	template: `
		<!-- Navbar -->
		<nav class="navbar navbar-full navbar-fixed-top" [ngClass]="style" [class.ls-left-sidebar]="layout.sidebarComponents.length">
			<ng-content></ng-content>
		</nav>
		<!-- // END Navbar -->
	`
})

export class NavbarComponent implements AfterViewInit, OnDestroy {
	@Input('navbar-style') style: string = 'navbar-dark bg-primary';
	const layoutSpacingClass: string = 'ls-top-navbar';

	constructor(private layout: LayoutComponent) {}

	ngAfterViewInit(): void {
		this.layout.wrapper.classList.add(this.layoutSpacingClass)
	}

	ngOnDestroy(): void {
		this.layout.wrapper.classList.remove(this.layoutSpacingClass)
	}
}