/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';


@Component({
    selector: 'kg-st-tbody-edit-delete',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <button mat-raised-button
                *ngIf="isActionEdit && editRowButtonContent"
                class="kg-smart-action kg-smart-action-edit-edit"
                [innerHTML]="editRowButtonContent"
                (click)="onEdit($event)"></button>
        <button mat-icon-button
                *ngIf="isActionEdit && !editRowButtonContent"
                class="kg-smart-action kg-smart-action-edit-edit"
                (click)="onEdit($event)"
                [matTooltip]="editTip"
                matTooltipPosition="left">
            <mat-icon>edit</mat-icon>
        </button>

        <button mat-raised-button
                *ngIf="isActionDelete && deleteRowButtonContent"
                class="kg-smart-action kg-smart-action-delete-delete"
                [innerHTML]="deleteRowButtonContent"
                (click)="onDelete($event)"></button>

        <button mat-icon-button
                *ngIf="isActionDelete && !deleteRowButtonContent"
                class="kg-smart-action kg-smart-action-edit-edit"
                (click)="onDelete($event)"
                [matTooltip]="deleteTip"
                matTooltipPosition="left">
            <mat-icon>delete</mat-icon>
        </button>
    `
})
export class TbodyEditDeleteComponent implements OnChanges {

    @Input() grid: Grid;
    @Input() row: Row;
    @Input() source: DataSource;
    @Input() deleteConfirm: EventEmitter<any>;
    @Input() editConfirm: EventEmitter<any>;

    @Output() edit = new EventEmitter<any>();
    @Output() delete = new EventEmitter<any>();
    @Output() editRowSelect = new EventEmitter<any>();

    isActionEdit: boolean;
    isActionDelete: boolean;
    editRowButtonContent: string;
    editTip: string;
    deleteRowButtonContent: string;
    deleteTip: string;

    onEdit(event: any) {
        event.preventDefault();
        event.stopPropagation();

        this.editRowSelect.emit(this.row);

        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: this.row.getData(),
                source: this.source
            });
        } else {
            this.grid.edit(this.row);
        }
    }

    onDelete(event: any) {
        event.preventDefault();
        event.stopPropagation();

        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source
            });
        } else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    }

    ngOnChanges() {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.editTip = this.grid.getSetting('edit.editTip');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
        this.deleteTip = this.grid.getSetting('delete.deleteTip');
    }
}
