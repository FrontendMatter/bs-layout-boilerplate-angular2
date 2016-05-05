import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component';

@Component({
	selector: 'layout-fixed',
	template: `
		<!-- Layout container -->
		<div class="layout-container ls-top-navbar">

			<navbar-component></navbar-component>

			<!-- Content -->
			<div class="layout-content" data-scrollable>
				<div class="container">

					<ng-content></ng-content>

				</div>
			</div> <!-- // END Content -->
		</div> <!-- // END Layout container -->
	`,
	directives: [
		NavbarComponent
	]
})

export class LayoutFixedComponent {

}