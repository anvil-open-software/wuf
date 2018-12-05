/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Output, EventEmitter, Input } from '@angular/core';

import { KgSmartTableCell } from '../../../lib/data-set/cell';


export class KgSmartTableDefaultEditor implements KgSmartTableEditor {
    @Input() cell: KgSmartTableCell;
    @Input() inputClass: string;

    @Output() onStopEditing = new EventEmitter<any>();
    @Output() onEdited = new EventEmitter<any>();
    @Output() onClick = new EventEmitter<any>();
}

export interface KgSmartTableEditor {
    cell: KgSmartTableCell;
    inputClass: string;
    onStopEditing: EventEmitter<any>;
    onEdited: EventEmitter<any>;
    onClick: EventEmitter<any>;
}
