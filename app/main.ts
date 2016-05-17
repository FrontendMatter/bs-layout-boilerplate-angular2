// Angular dependencies
import 'es6-shim';
import 'zone.js';
import 'reflect-metadata';

// App dependencies
import 'jquery';
import 'simplebar';
import 'tether';
import 'bootstrap';

// Bootstrap application
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { AppComponent } from './app.component';

// @if NODE_ENV='production'
import { enableProdMode } from '@angular/core';
enableProdMode();
// @endif

bootstrap(AppComponent, [ROUTER_PROVIDERS]);