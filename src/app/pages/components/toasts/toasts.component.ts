/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit } from '@angular/core';
import { WufToastsService } from '@anviltech/wuf-ang-toasts';

@Component({
    selector: 'app-toasts',
    templateUrl: './toasts.component.html',
    styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {

    sampleCode = `
    public error() {
        this.toastsService.error('with a touch of gold', 'error');
    }
    public warning() {
        this.toastsService.warning('with a touch of gold', 'warn');
    }
    public info() {
        this.toastsService.info('with a touch of gold', 'info');
    }
    public success() {
        this.toastsService.success('with a touch of gold', 'success');
    }
`;

    apiCode = `
    info(message: string, title?: string, actionLabel?: string)
    error(message: string, title?: string, actionLabel?: string)
    warning(message: string, title?: string, actionLabel?: string)
    success(message: string, title?: string, actionLabel?: string)
    `;

    constructor(private toastsService: WufToastsService) { }

    ngOnInit() {
    }

    public error() {
        this.toastsService.error('with a touch of gold', 'error');
    }
    public warning() {
        this.toastsService.warning('with a touch of gold', 'warn');
    }
    public info() {
        this.toastsService.info('with a touch of gold', 'info');
    }
    public success() {
        this.toastsService.success('with a touch of gold', 'success');
    }

}
