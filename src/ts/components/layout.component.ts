import { 
	Component, 
	Input, 
	ContentChildren, 
	QueryList, 
	ElementRef
} from '@angular/core';
import { SidebarComponent } from 'app/components/sidebar.component';
import { ScrollableComponent } from 'app/directives/scrollable.directive';

@Component({
	selector: 'layout',
	template: `
		<!-- Layout container -->
		<div class="layout-container">

			<ng-content select="navbar"></ng-content>

			<ng-content select="sidebar"></ng-content>

			<!-- Content -->
			<div class="layout-content" [attr.data-scrollable]="scrollable">
				<div [ngClass]="{ 'container': type === 'fixed', 'container-fluid': type === 'fluid' }">
					<ng-content></ng-content>
				</div>
			</div> <!-- // END Content -->
		</div> <!-- // END Layout container -->
	`
})

export class LayoutComponent {
	@Input('layout-type') type: string = 'fluid';
	@Input('layout-scrollable') scrollable: boolean = true;
	@ContentChildren(SidebarComponent) sidebarComponents: QueryList<SidebarComponent>
	const layoutContainerSelector: string = '.layout-container';

	get wrapper() {
		return this.elementRef.nativeElement.querySelector(this.layoutContainerSelector);
	}

	constructor(private elementRef: ElementRef) {}
}