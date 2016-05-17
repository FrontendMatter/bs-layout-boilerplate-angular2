import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LayoutComponent, NavbarComponent, SidebarComponent, SidebarToggleDirective } from 'ng2-bootstrap-layout';
import { Sidebar, SidebarToggle } from 'bootstrap-layout';
import { HelloWorldComponent } from '../shared/hello-world.component';
import { RouterActiveDirective } from 'ng2-router-active';

@Component({
	selector: 'sidebar-page',
	template: `
		<ng2-bl-layout layout-type="fluid">

			<ng2-bl-navbar navbar-class="navbar-light bg-white">

				<!-- Navbar toggle -->
				<button class="navbar-toggler hidden-md-up pull-xs-right last-child-xs" type="button" data-toggle="collapse" data-target="#navbar"><span class="material-icons">menu</span></button>

				<!-- Sidebar toggle -->
				<button class="navbar-toggler pull-xs-left" type="button" ng2-bl-sidebar-toggle data-target="#sidebar"><span class="material-icons">menu</span></button>

				<!-- Brand -->
				<span class="navbar-brand">Dashboard</span>

				<!-- Collapse -->
				<div class="collapse navbar-toggleable-xs" id="navbar">
					<ul class="nav navbar-nav">
						<li class="nav-item" ng2-router-active><a class="nav-link" [routerLink]="['/home']">Fixed</a></li>
						<li class="nav-item" ng2-router-active><a class="nav-link" [routerLink]="['/sidebar']">Sidebar</a></li>
					</ul>
				</div>
				<!-- // END Collapse -->

			</ng2-bl-navbar>

			<ng2-bl-sidebar sidebar-id="sidebar">

				<!-- Brand -->
				<a [routerLink]="['/home']" class="sidebar-brand m-b-0 sidebar-brand-bg sidebar-brand-border">Brand</a>

				<!-- Menu -->
				<ul class="sidebar-menu sm-active-button-bg">
					<li class="sidebar-menu-item" ng2-router-active>
						<a class="sidebar-menu-button" [routerLink]="['/home']"><i class="sidebar-menu-icon material-icons">home</i> Fixed layout</a>
					</li>
					<li class="sidebar-menu-item" ng2-router-active>
						<a class="sidebar-menu-button" [routerLink]="['/sidebar']"><i class="sidebar-menu-icon material-icons">menu</i> Sidebar layout</a>
					</li>
				</ul>
				<!-- // END Menu -->

			</ng2-bl-sidebar>

			<!-- Breadcrumb -->
			<ol class="breadcrumb">
				<li><a [routerLink]="['/home']">BS Layout</a></li>
				<li class="active">Sidebar layout</li>
			</ol>
			<!-- // END Breadcrumb -->

			<hello-world></hello-world>

		</ng2-bl-layout>
	`,
	directives: [
		ROUTER_DIRECTIVES,
		LayoutComponent,
		NavbarComponent,
		SidebarToggleDirective,
		SidebarComponent,
		HelloWorldComponent,
		RouterActiveDirective
	],
	providers: [
		Sidebar,
		SidebarToggle
	]
})

export class SidebarPage {}