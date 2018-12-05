/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginScreenComponent } from './login.screen.component';


@NgModule({
    imports: [CommonModule],
    exports: [
        LoginScreenComponent
    ],
    declarations: [
        LoginScreenComponent
    ],
    entryComponents: [ LoginScreenComponent ]
})
export class LoginScreenModule {
}
