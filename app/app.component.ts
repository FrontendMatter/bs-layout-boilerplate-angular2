import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { HomePage } from './home/index';
import { SidebarPage } from './sidebar/index';

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