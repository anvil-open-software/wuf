/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Column } from './column';
import { DataSet } from './data-set';
import { Row } from './row';


export class KgSmartTableCell {

    newValue: any = '';

    protected static prepareFunc(value: any) {
        return value;
    }


    constructor(protected value: any, protected row: Row, protected column: any, protected dataSet: DataSet) {
        this.newValue = value;
    }

    getColumn(): Column {
        return this.column;
    }

    getValidator(): any {
        return this.dataSet.getRowValidator(this.getRow().index).controls[this.getId()];
    }

    getRow(): Row {
        return this.row;
    }

    getValue(): any {
        const valid = this.column.getValuePrepareFunction() instanceof Function;
        const prepare = valid ? this.column.getValuePrepareFunction() : KgSmartTableCell.prepareFunc;
        return prepare.call(null, this.value, this.row.getData());
    }

    setValue(value: any): any {
        this.newValue = value;
    }

    getId(): string {
        return this.getColumn().id;
    }

    getTitle(): string {
        return this.getColumn().title;
    }

    isEditable(): boolean {
        if (this.getRow().index === -1) {
            return this.getColumn().isAddable;
        }
        else {
            return this.getColumn().isEditable;
        }
    }

}
