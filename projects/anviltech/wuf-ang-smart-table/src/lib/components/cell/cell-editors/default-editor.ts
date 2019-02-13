/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Output, EventEmitter, Input } from '@angular/core';

import { WufSmartTableCell } from '../../../lib/data-set/cell';


export class WufSmartTableDefaultEditor implements WufSmartTableEditor {
    @Input() cell: WufSmartTableCell;
    @Input() inputClass: string;

    @Output() onStopEditing = new EventEmitter<any>();
    @Output() onEdited = new EventEmitter<any>();
    @Output() onClick = new EventEmitter<any>();
}

export interface WufSmartTableEditor {
    cell: WufSmartTableCell;
    inputClass: string;
    onStopEditing: EventEmitter<any>;
    onEdited: EventEmitter<any>;
    onClick: EventEmitter<any>;
}
