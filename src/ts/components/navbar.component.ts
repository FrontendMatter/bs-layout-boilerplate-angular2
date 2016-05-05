import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { LayoutComponent } from 'app/components/layout.component';

@Component({
	selector: 'navbar',
	template: `
		<!-- Navbar -->
		<nav class="navbar navbar-dark bg-primary navbar-full navbar-fixed-top" [class.ls-left-sidebar]="layout.sidebarComponents.length > 0">
			<div class="container">

				<!-- Navbar toggle -->
				<button class="navbar-toggler hidden-md-up pull-xs-right last-child-xs" type="button" data-toggle="collapse" data-target="#navbar"><span class="material-icons">menu</span></button>

				<!-- Sidebar toggle -->
		    	<button class="navbar-toggler pull-xs-left" type="button" data-toggle="sidebar" data-target="#sidebar"><span class="material-icons">menu</span></button>

				<!-- Brand -->
				<a class="navbar-brand" [routerLink]="['Home']">Brand</a>

				<!-- Collapse -->
				<div class="collapse navbar-toggleable-xs" id="navbar">
					<ul class="nav navbar-nav">
						<li class="nav-item" [class.active]="router.isRouteActive(router.generate(['/Home']))"><a class="nav-link" [routerLink]="['Home']">Fixed</a></li>
						<li class="nav-item" [class.active]="router.isRouteActive(router.generate(['/Sidebar']))"><a class="nav-link" [routerLink]="['Sidebar']">Sidebar</a></li>
					</ul>
				</div>
				<!-- // END Collapse -->
			</div>
		</nav>
		<!-- // END Navbar -->
	`,
	directives: [
		ROUTER_DIRECTIVES
	]
})

export class NavbarComponent {
	constructor(private router: Router, private layout: LayoutComponent) {}
}