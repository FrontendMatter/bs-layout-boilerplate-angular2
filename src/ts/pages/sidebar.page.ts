import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LayoutComponent } from 'app/components/layout.component';
import { NavbarComponent } from 'app/components/navbar.component';
import { SidebarComponent } from 'app/components/sidebar.component';
import { HelloWorldComponent } from 'app/components/hello-world.component';
import { SidebarToggleComponent } from 'app/directives/sidebar-toggle.directive';
import { RouterActive } from 'app/directives/router-active.directive';

@Component({
	selector: 'sidebar-page',
	template: `
		<layout layout-type="fluid">

			<navbar navbar-style="navbar-light bg-white">

				<!-- Navbar toggle -->
				<button class="navbar-toggler hidden-md-up pull-xs-right last-child-xs" type="button" data-toggle="collapse" data-target="#navbar"><span class="material-icons">menu</span></button>

				<!-- Sidebar toggle -->
				<button class="navbar-toggler pull-xs-left" type="button" sidebar-toggle data-target="#sidebar"><span class="material-icons">menu</span></button>

				<!-- Brand -->
				<span class="navbar-brand">Dashboard</span>

				<!-- Collapse -->
				<div class="collapse navbar-toggleable-xs" id="navbar">
					<ul class="nav navbar-nav">
						<li class="nav-item" router-active><a class="nav-link" [routerLink]="['/home']">Fixed</a></li>
						<li class="nav-item" router-active><a class="nav-link" [routerLink]="['/sidebar']">Sidebar</a></li>
					</ul>
				</div>
				<!-- // END Collapse -->

			</navbar>

			<sidebar sidebar-id="sidebar">

				<!-- Brand -->
				<a [routerLink]="['/home']" class="sidebar-brand m-b-0 sidebar-brand-bg sidebar-brand-border">Brand</a>

				<!-- Menu -->
				<ul class="sidebar-menu sm-active-button-bg">
					<li class="sidebar-menu-item" router-active>
						<a class="sidebar-menu-button" [routerLink]="['/home']"><i class="sidebar-menu-icon material-icons">home</i> Fixed layout</a>
					</li>
					<li class="sidebar-menu-item" router-active>
						<a class="sidebar-menu-button" [routerLink]="['/sidebar']"><i class="sidebar-menu-icon material-icons">menu</i> Sidebar layout</a>
					</li>
				</ul>
				<!-- // END Menu -->

			</sidebar>

			<!-- Breadcrumb -->
			<ol class="breadcrumb">
				<li><a [routerLink]="['/home']">BS Layout</a></li>
				<li class="active">Sidebar layout</li>
			</ol>
			<!-- // END Breadcrumb -->

			<hello-world></hello-world>

		</layout>
	`,
	directives: [
		ROUTER_DIRECTIVES,
		LayoutComponent,
		NavbarComponent,
		SidebarToggleComponent,
		SidebarComponent,
		HelloWorldComponent,
		RouterActive
	]
})

export class SidebarPage {}