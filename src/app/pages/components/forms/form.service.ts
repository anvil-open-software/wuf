/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';


@Injectable()
export class FormSettingsService {

    // Form proposal
    initialSettings: any = {
        id:             'initial',
        width:          '50',
        alignment:      'left',
        radioBlock:     'block',
        inputBlock:     'block',
        textareaBlock:  'inline',
        floatLabel:     'auto',
        errorFill:      'input',
        errorIcon:      true,
        reserveSpace:   true
    };

    proposedSettings: any = {
        id:             'proposed',
        width:          '50',
        alignment:      'left',
        radioBlock:     'block',
        inputBlock:     'block',
        textareaBlock:  'block',
        floatLabel:     'auto',
        errorFill:      'input',
        errorIcon:      true,
        reserveSpace:   true
    };

    diqSettings: any = {
        id:             'diq',
        width:          '100',
        alignment:      'left',
        radioBlock:     'inline',
        inputBlock:     'inline',
        textareaBlock:  'block',
        floatLabel:     'always',
        errorFill:      'neither',
        errorIcon:      true,
        reserveSpace:   false
    };

    settings: any = {};

    defaultSettings: any = this.proposedSettings;

    constructor() {
    }

}
