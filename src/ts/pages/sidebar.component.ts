import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { LayoutComponent } from 'app/components/layout.component';
import { NavbarComponent } from 'app/components/navbar.component';
import { SidebarComponent } from 'app/components/sidebar.component';

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

			<h1>Hello World</h1>

			<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea ullam iusto asperiores repellat perspiciatis error. Quo praesentium, expedita neque natus quisquam iure consequuntur unde hic doloribus ab voluptas pariatur!</p>

			<div class="card">
				<div class="card-block">
					This is a demo for the <a target="_blank" href="https://github.com/themekit/adminplus-boilerplate-npm">adminplus-boilerplate-npm</a> repository. <br>
					Read the full guide <a target="_blank" href="http://adminplus.themekit.io/basic-usage">Simple npm workflow</a>.
				</div>
			</div>

		</layout>
	`,
	directives: [
		ROUTER_DIRECTIVES,
		LayoutComponent,
		NavbarComponent,
		SidebarComponent
	]
})

export class SidebarPageComponent {}