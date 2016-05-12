import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { HomePage } from './pages/home.page';
import { SidebarPage } from './pages/sidebar.page';

@Component({
	selector: 'app',
	template: `<router-outlet></router-outlet>`,
	directives: [
		ROUTER_DIRECTIVES
	]
})

@Routes([
	{ path: '/home', component: HomePage },
	{ path: '/sidebar', component: SidebarPage }
])

export class AppComponent implements OnInit {
	constructor(private router: Router) {}
	ngOnInit() {
		this.router.navigate(['/home']);
	}
}