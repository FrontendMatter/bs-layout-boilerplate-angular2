import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { AppComponent } from './app.component';

import { enableProdMode } from '@angular/core';
// enableProdMode();

bootstrap(AppComponent, [ROUTER_PROVIDERS]);