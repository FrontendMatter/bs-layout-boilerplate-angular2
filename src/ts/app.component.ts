import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { HomePageComponent } from './pages/home.component';
import { SidebarPageComponent } from './pages/sidebar.component';

@Component({
	selector: 'body',
	template: `
		<router-outlet></router-outlet>
	`,
	directives: [
		ROUTER_DIRECTIVES
	]
})

@RouteConfig([
	{ path: '/', name: 'Home', component: HomePageComponent, useAsDefault: true },
	{ path: '/sidebar', name: 'Sidebar', component: SidebarPageComponent }
])

export class AppComponent {}