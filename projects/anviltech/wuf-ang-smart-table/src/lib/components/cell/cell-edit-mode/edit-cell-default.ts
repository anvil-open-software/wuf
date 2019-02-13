/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Output, EventEmitter, Input } from '@angular/core';

import { WufSmartTableCell } from '../../../lib/data-set/cell';


export class EditCellDefault {

    @Input() cell: WufSmartTableCell;
    @Input() inputClass: string = '';

    @Output() edited = new EventEmitter<any>();

    onEdited(event: any): boolean {
        this.edited.next(event);
        return false;
    }

    onStopEditing(): boolean {
        this.cell.getRow().isInEditing = false;
        return false;
    }

    onClick(event: any) {
        event.stopPropagation();
    }
}
