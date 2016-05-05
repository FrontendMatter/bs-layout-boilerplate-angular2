import { Component, AfterViewInit } from '@angular/core';
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { PageLayoutFixedComponent } from './page-layout-fixed.component';
import { PageSidebarComponent } from './page-sidebar.component';

declare var BootstrapLayout:any;

@Component({
	selector: 'body',
	providers: [
		ROUTER_PROVIDERS
	],
	template: `
		<router-outlet></router-outlet>
	`,
	directives: [
		ROUTER_DIRECTIVES
	]
})

@RouteConfig([
	{
		path: '/',
		name: 'Home',
		component: PageLayoutFixedComponent,
		useAsDefault: true
	},
	{
		path: '/sidebar',
		name: 'Sidebar',
		component: PageSidebarComponent
	}
])

export class AppComponent implements AfterViewInit {

	title = 'Angular 2 Sidebar Layout';
	
	ngAfterViewInit():void {
		console.log('afterViewInit():');
		// BootstrapLayout.Sidebar.init();
		// BootstrapLayout.Scrollable();
	}
}