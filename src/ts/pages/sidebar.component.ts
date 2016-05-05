import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { LayoutComponent } from 'app/components/layout.component';
import { NavbarComponent } from 'app/components/navbar.component';
import { SidebarComponent } from 'app/components/sidebar.component';
import { HelloWorldComponent } from 'app/components/hello-world.component';

@Component({
	template: `
		<layout type="fluid">

			<navbar></navbar>

			<sidebar>

				<!-- Brand -->
				<a href="index.html" class="sidebar-brand">Brand</a>

				<!-- Menu -->
				<ul class="sidebar-menu sm-active-button-bg">
					<li class="sidebar-menu-item">
						<a class="sidebar-menu-button" href="index.html"><i class="sidebar-menu-icon material-icons">home</i> Fixed layout</a>
					</li>
					<li class="sidebar-menu-item active">
						<a class="sidebar-menu-button" href="sidebar.html"><i class="sidebar-menu-icon material-icons">menu</i> Sidebar layout</a>
					</li>
				</ul>
				<!-- // END Menu -->

			</sidebar>

			<!-- Breadcrumb -->
			<ol class="breadcrumb">
				<li><a [routerLink]="['Home']">BS Layout</a></li>
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
		SidebarComponent,
		HelloWorldComponent
	]
})

export class SidebarPageComponent {}