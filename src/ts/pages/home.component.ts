import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { LayoutComponent } from 'app/components/layout.component';
import { NavbarComponent } from 'app/components/navbar.component';
import { HelloWorldComponent } from 'app/components/hello-world.component'

@Component({
	template: `
		<layout type="fixed">

			<navbar>

				<!-- Navbar toggle -->
				<button class="navbar-toggler hidden-md-up pull-xs-right last-child-xs" type="button" data-toggle="collapse" data-target="#navbar"><span class="material-icons">menu</span></button>

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

			</navbar>

			<!-- Breadcrumb -->
			<ol class="breadcrumb">
				<li><a [routerLink]="['Home']">BS Layout</a></li>
				<li class="active">Fixed layout</li>
			</ol>
			<!-- // END Breadcrumb -->

			<hello-world></hello-world>

		</layout>
	`,
	directives: [
		ROUTER_DIRECTIVES,
		LayoutComponent,
		NavbarComponent,
		HelloWorldComponent
	]
})

export class HomePageComponent {
	constructor(private router: Router) {}
}