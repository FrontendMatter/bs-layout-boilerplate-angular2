import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LayoutComponent, NavbarComponent } from 'ng2-bootstrap-layout';
import { HelloWorldComponent } from '../shared/index';
import { RouterActiveDirective } from 'ng2-router-active';

@Component({
	selector: 'home-page',
	template: `
		<ng2-bl-layout layout-type="fixed">

			<ng2-bl-navbar>
				<div class="container">
				
					<!-- Navbar toggle -->
					<button class="navbar-toggler hidden-md-up pull-xs-right last-child-xs" type="button" data-toggle="collapse" data-target="#navbar"><span class="material-icons">menu</span></button>

					<!-- Brand -->
					<a class="navbar-brand" [routerLink]="['/home']">Brand</a>

					<!-- Collapse -->
					<div class="collapse navbar-toggleable-xs" id="navbar">
						<ul class="nav navbar-nav">
							<li class="nav-item" ng2-router-active><a class="nav-link" [routerLink]="['/home']">Fixed</a></li>
							<li class="nav-item" ng2-router-active><a class="nav-link" [routerLink]="['/sidebar']">Sidebar</a></li>
						</ul>
					</div>
					<!-- // END Collapse -->

				</div>
			</ng2-bl-navbar>

			<!-- Breadcrumb -->
			<ol class="breadcrumb">
				<li><a [routerLink]="['/home']">BS Layout</a></li>
				<li class="active">Fixed layout</li>
			</ol>
			<!-- // END Breadcrumb -->

			<hello-world></hello-world>

		</ng2-bl-layout>
	`,
	directives: [
		ROUTER_DIRECTIVES,
		LayoutComponent,
		NavbarComponent,
		HelloWorldComponent,
		RouterActiveDirective
	]
})

export class HomePage {}