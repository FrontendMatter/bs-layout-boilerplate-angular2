import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { LayoutComponent } from 'app/components/layout.component';
import { NavbarComponent } from 'app/components/navbar.component';

@Component({
	template: `
		<layout type="fixed">

			<navbar></navbar>

			<!-- Breadcrumb -->
			<ol class="breadcrumb">
				<li><a [routerLink]="['Home']">BS Layout</a></li>
				<li class="active">Fixed layout</li>
			</ol>
			<!-- // END Breadcrumb -->

			<h1>Hello World</h1>
			
			<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea ullam iusto asperiores repellat perspiciatis error. Quo praesentium, expedita neque natus quisquam iure consequuntur unde hic doloribus ab voluptas pariatur!</p>

			<div class="card">
				<div class="card-block">
					This is a demo for the <a target="_blank" href="https://github.com/themekit/bs-layout-boilerplate-angular2">bs-layout-boilerplate-angular2</a> repository, using <a target="_blank" href="https://github.com/themekit/bootstrap-layout">Bootstrap Layout</a> with Angular 2.
				</div>
			</div>

		</layout>
	`,
	directives: [
		ROUTER_DIRECTIVES,
		LayoutComponent,
		NavbarComponent
	]
})

export class HomePageComponent {}