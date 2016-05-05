import { Component } from '@angular/core';
import { LayoutFixedComponent } from './layout-fixed.component';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
	selector: 'page-sidebar',
	template: `
		<layout-fixed>

			<!-- Breadcrumb -->
			<ol class="breadcrumb">
				<li><a [routerLink]="['Home']">AdminPlus</a></li>
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

		</layout-fixed>
	`,
	directives: [
		LayoutFixedComponent,
		ROUTER_DIRECTIVES
	]
})

export class PageSidebarComponent {

}