/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';


@Component({
    selector: 'wuf-st-tbody-create-cancel',
    template: `
        <button mat-raised-button
                class="wuf-smart-action wuf-smart-action-edit-save"
                [innerHTML]="saveButtonContent"
                (click)="onSave($event)"
                *ngIf="saveButtonContent"></button>
        <button mat-icon-button
                *ngIf="!saveButtonContent"
                class="wuf-smart-action wuf-smart-action-edit-save"
                (click)="onSave($event)"
                [matTooltip]="saveTip"
                matTooltipPosition="left">
            <mat-icon>done</mat-icon>
        </button>

        <button mat-raised-button
                class="wuf-smart-action wuf-smart-action-edit-cancel"
                [innerHTML]="cancelButtonContent"
                (click)="onCancelEdit($event)"
                *ngIf="cancelButtonContent"></button>
        <button mat-icon-button
                *ngIf="!cancelButtonContent"
                class="wuf-smart-action wuf-smart-action-edit-cancel"
                (click)="onCancelEdit($event)"
                [matTooltip]="cancelTip"
                matTooltipPosition="left">
            <mat-icon>close</mat-icon>
        </button>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TbodyCreateCancelComponent implements OnChanges {

    @Input() grid: Grid;
    @Input() row: Row;
    @Input() editConfirm: EventEmitter<any>;

    cancelButtonContent: string;
    cancelTip: string;
    saveButtonContent: string;
    saveTip: string;

    onSave(event: any) {
        event.preventDefault();
        event.stopPropagation();

        this.grid.save(this.row, this.editConfirm);
    }

    onCancelEdit(event: any) {
        event.preventDefault();
        event.stopPropagation();

        this.row.isInEditing = false;
        this.grid.dataSet.getRowValidator(this.row.index).reset();
    }

    ngOnChanges() {
        this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
        this.saveTip = this.grid.getSetting('edit.saveTip');
        this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
        this.cancelTip = this.grid.getSetting('edit.cancelTip');
    }
}
