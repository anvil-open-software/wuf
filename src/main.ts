/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { webcomponentsReady } from '@codebakery/origami/polyfills';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs'; // touch gesture support (required by Angular Material)


webcomponentsReady().then(() => {
    platformBrowserDynamic().bootstrapModule(AppModule, {})
    .catch(err => console.log(err));
});

if (environment.production) {
    enableProdMode();
}
