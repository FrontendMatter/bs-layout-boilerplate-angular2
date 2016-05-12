import { Directive, AfterViewInit, ElementRef } from '@angular/core';
import { scrollable } from 'bootstrap-layout-scrollable';

@Directive({
	selector: '[data-scrollable]'
})

export class ScrollableComponent implements AfterViewInit {
	constructor(private elementRef: ElementRef) {}
	ngAfterViewInit(): void {
		scrollable.init(this.elementRef.nativeElement)
	}
}