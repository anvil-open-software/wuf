/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { Grid } from '../../../services/grid';
import { Row } from '../../../data-set/row';
import { DataSource } from '../../../data-source/data-source';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'wuf-st-tbody-edit-delete',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `

        <!-- edit buttons -->
        <ng-container *ngIf="isActionEdit">
            <!-- icon button -->
            <button
                mat-icon-button
                *ngIf="!editLabel"
                class="wuf-smart-action wuf-smart-action-icon wuf-smart-action-edit"
                (click)="onEdit($event)"
                [matTooltip]="editTip | translate"
                matTooltipPosition="left"
            >
                <mat-icon>edit</mat-icon>
            </button>
            <!-- button with label -->
            <button
                mat-raised-button
                *ngIf="editLabel"
                class="wuf-smart-action wuf-smart-action-button wuf-smart-action-edit"
                (click)="onEdit($event)"
                matTooltipPosition="left"
            >
                {{editLabel | translate}}
            </button>
        </ng-container>

        <!-- delete buttons -->
        <ng-container *ngIf="isActionDelete">
            <!-- icon button -->
            <button
                mat-icon-button
                *ngIf="!deleteLabel"
                class="wuf-smart-action wuf-smart-action-icon wuf-smart-action-edit"
                (click)="onDelete($event)"
                [matTooltip]="deleteTip | translate"
                matTooltipPosition="left"
            >
                <mat-icon>delete</mat-icon>
                <span *ngIf="deleteLabel" translate>{{deleteLabel}}</span>
            </button>
            <!-- button with label -->
            <button
                mat-raised-button
                *ngIf="deleteLabel"
                class="wuf-smart-action wuf-smart-action-button wuf-smart-action-edit"
                (click)="onDelete($event)"
                matTooltipPosition="left"
            >
                {{deleteLabel | translate}}
            </button>
        </ng-container>
    `
})
export class TbodyEditDeleteComponent implements OnChanges {

    @Input() grid: Grid;
    @Input() row: Row;
    @Input() source: DataSource;
    @Input() deleteConfirm: EventEmitter<any>;
    @Input() editConfirm: EventEmitter<any>;
    @Input() position: string;

    @Output() edit = new EventEmitter<any>();
    @Output() delete = new EventEmitter<any>();
    @Output() editRowSelect = new EventEmitter<any>();

    isActionEdit: boolean;
    isActionDelete: boolean;
    editLabel: string;
    deleteLabel: string;
    editTip: string;
    deleteTip: string;

    constructor(public translate: TranslateService) {}

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
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    }

    ngOnChanges() {
        this.isActionEdit = this.grid.showButton('edit', this.position);
        this.isActionDelete = this.grid.showButton('delete', this.position);

        this.editLabel = this.grid.getSetting('actions.edit').hasOwnProperty('label')
            ? this.grid.getSetting('actions.edit.label') : undefined;
        this.deleteLabel = this.grid.getSetting('actions.delete').hasOwnProperty('label')
            ? this.grid.getSetting('actions.delete.label') : undefined;

        this.editTip = this.grid.getSetting('actions.edit').hasOwnProperty('tip')
            ? this.grid.getSetting('actions.edit.tip') : undefined;
        this.deleteTip = this.grid.getSetting('actions.delete').hasOwnProperty('tip')
            ? this.grid.getSetting('actions.delete.tip') : undefined;
    }
}
