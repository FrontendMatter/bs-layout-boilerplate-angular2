import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LayoutComponent } from 'app/components/layout.component';
import { NavbarComponent } from 'app/components/navbar.component';
import { HelloWorldComponent } from 'app/components/hello-world.component'
import { RouterActive } from 'app/directives/router-active.directive'

@Component({
	selector: 'home-page',
	template: `
		<layout layout-type="fixed">

			<navbar>
				<div class="container">
				
					<!-- Navbar toggle -->
					<button class="navbar-toggler hidden-md-up pull-xs-right last-child-xs" type="button" data-toggle="collapse" data-target="#navbar"><span class="material-icons">menu</span></button>

					<!-- Brand -->
					<a class="navbar-brand" [routerLink]="['/home']">Brand</a>

					<!-- Collapse -->
					<div class="collapse navbar-toggleable-xs" id="navbar">
						<ul class="nav navbar-nav">
							<li class="nav-item" router-active><a class="nav-link" [routerLink]="['/home']">Fixed</a></li>
							<li class="nav-item" router-active><a class="nav-link" [routerLink]="['/sidebar']">Sidebar</a></li>
						</ul>
					</div>
					<!-- // END Collapse -->

				</div>
			</navbar>

			<!-- Breadcrumb -->
			<ol class="breadcrumb">
				<li><a [routerLink]="['/home']">BS Layout</a></li>
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
		HelloWorldComponent,
		RouterActive
	]
})

export class HomePage {}