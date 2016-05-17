import { Component } from '@angular/core';

@Component({
	selector: 'hello-world',
	template: `
		<h1>Hello World</h1>
			
		<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ea ullam iusto asperiores repellat perspiciatis error. Quo praesentium, expedita neque natus quisquam iure consequuntur unde hic doloribus ab voluptas pariatur!</p>

		<div class="card card-block">
			This is a demo for the <a target="_blank" href="https://github.com/themekit/bs-layout-boilerplate-angular2">bs-layout-boilerplate-angular2</a> repository, using <a target="_blank" href="https://github.com/themekit/bootstrap-layout">Bootstrap Layout</a> with Angular 2.
		</div>
	`
})

export class HelloWorldComponent {}