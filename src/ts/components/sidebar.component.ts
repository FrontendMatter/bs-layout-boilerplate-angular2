import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { sidebar } from 'bootstrap-layout';
import { randString } from 'mout/random';
import { ScrollableComponent } from 'app/directives/scrollable.directive';

@Component({
	selector: 'sidebar',
	template: `
		<!-- Sidebar -->
		<div class="sidebar sidebar-dark bg-primary" [id]="id" data-scrollable>
			<ng-content></ng-content>
		</div>
		<!-- // END Sidebar -->
	`,
	directives: [
		ScrollableComponent
	]
})

export class SidebarComponent implements AfterViewInit, OnDestroy {
	@Input('sidebar-id') id: String = `sidebar-${ randString(10) }`;

	get selector(): string {
		return `#${ this.id }`
	}

	ngAfterViewInit(): void {
		sidebar.init(this.selector);
	}

	ngOnDestroy(): void {
		sidebar.destroy(this.selector);
	}
}