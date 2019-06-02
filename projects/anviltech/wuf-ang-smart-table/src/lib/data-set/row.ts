/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { WufSmartTableCell } from './cell';
import { Column } from './column';
import { DataSet } from './data-set';


export class Row {

    isSelected: boolean = false;
    isInEditing: boolean = false;
    cells: Array<WufSmartTableCell> = [];

    constructor(public index: number, protected data: any, protected _dataSet: DataSet) {
        this.process();
    }

    getCell(column: Column): WufSmartTableCell | undefined {
        return this.cells.find(el => el.getColumn() === column);
    }

    getCells() {
        return this.cells;
    }

    getData(): any {
        return this.data;
    }

    getIsSelected(): boolean {
        return this.isSelected;
    }

    getNewData(): any {
        const values = Object.assign({}, this.data);
        this.getCells().forEach((cell) => values[cell.getColumn().id] = cell.newValue);
        return values;
    }

    setData(data: any): any {
        this.data = data;
        this.process();
    }

    process() {
        this.cells = [];
        this._dataSet.getColumns().forEach((column: Column) => {
            const cell = this.createCell(column);
            this.cells.push(cell);
        });
    }

    createCell(column: Column): WufSmartTableCell {
        const defValue = (column as any).settings.defaultValue ? (column as any).settings.defaultValue : '';
        const value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
        return new WufSmartTableCell(value, this, column, this._dataSet);
    }
}
