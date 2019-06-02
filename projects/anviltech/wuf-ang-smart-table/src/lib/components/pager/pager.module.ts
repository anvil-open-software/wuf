/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagerComponent } from './pager.component';
import { SharedModule } from '../../shared.module';


@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        PagerComponent
    ],
    exports: [
        PagerComponent
    ]
})
export class PagerModule {
}
