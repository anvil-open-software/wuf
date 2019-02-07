/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class WufToastsService {

    public constructor(public snackBar: MatSnackBar) { }

    public info(message: string, title: string = '', actionLabel?: string): MatSnackBarRef<SimpleSnackBar> {
        return this.snackBar.open(`${title} ${message}`, actionLabel ? actionLabel : null, this._createConfig('info'));
    }

    public success(message: string, title: string = '', actionLabel?: string): MatSnackBarRef<SimpleSnackBar> {
        return this.snackBar.open(`${title} ${message}`, actionLabel ? actionLabel : null, this._createConfig('success'));
    }

    public error(message: string, title: string = '', actionLabel?: string): MatSnackBarRef<SimpleSnackBar> {
        return this.snackBar.open(`${title} ${message}`, actionLabel ? actionLabel : null, this._createConfig('error'));
    }


    public warning(message: string, title: string = '', options?: any, actionLabel?: string): MatSnackBarRef<SimpleSnackBar> {
        return this.snackBar.open(`${title} ${message}`, actionLabel ? actionLabel : null, this._createConfig('warning'));
    }

    private _createConfig(infoType: string) {
        const config = new MatSnackBarConfig();
        config.verticalPosition = 'top';
        config.horizontalPosition = 'right';
        config.duration = 0;
        config.panelClass = infoType ? ['toast', infoType] : undefined;
        // config.direction = this.dir.value;
        config.duration = 5000;
        return config;
    }
}
