/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../../services/grid';
import { Row } from '../../../data-set/row';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'wuf-st-tbody-create-cancel',
    template: `
        
        <!-- save buttons -->
        <!-- icon button -->
        <button 
            *ngIf="!saveLabel"
            mat-icon-button
            class="wuf-smart-action wuf-smart-action-icon wuf-smart-action-edit-save"
            (click)="onSave($event)"
            [matTooltip]="saveTip | translate"
            matTooltipPosition="left">
            <mat-icon>done</mat-icon>
        </button>
        <!-- button with label -->
        <button
            *ngIf="saveLabel"
            mat-raised-button
            class="wuf-smart-action wuf-smart-action-button wuf-smart-action-edit-save"
            (click)="onSave($event)"
            matTooltipPosition="left">
            {{saveLabel | translate}}
        </button>

        <!-- cancel buttons -->
        <!-- icon button -->
        <button
            *ngIf="!cancelLabel"
            mat-icon-button
            class="wuf-smart-action wuf-smart-action-icon wuf-smart-action-edit-cancel"
            (click)="onCancelEdit($event)"
            [matTooltip]="cancelTip | translate"
            matTooltipPosition="left"
        >
            <mat-icon>close</mat-icon>
        </button>
        <!-- button with label -->
        <button
            *ngIf="cancelLabel"
            mat-raised-button
            class="wuf-smart-action wuf-smart-action-button wuf-smart-action-edit-cancel"
            (click)="onCancelEdit($event)"
            matTooltipPosition="left">
            {{cancelLabel | translate}}
        </button>
    `,
    encapsulation: ViewEncapsulation.None
})
export class TbodyCreateCancelComponent implements OnChanges {

    @Input() grid: Grid;
    @Input() row: Row;
    @Input() editConfirm: EventEmitter<any>;

    cancelLabel: string;
    saveLabel: string;
    cancelTip: string;
    saveTip: string;

    constructor(public translate: TranslateService) {}

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
        this.saveLabel = this.grid.getSetting('actions.save').hasOwnProperty('label')
            ? this.grid.getSetting('actions.save.label') : undefined;
        this.cancelLabel = this.grid.getSetting('actions.cancel').hasOwnProperty('label')
            ? this.grid.getSetting('actions.cancel.label') : undefined;

        this.saveTip = this.grid.getSetting('actions.save').hasOwnProperty('tip')
            ? this.grid.getSetting('actions.save.tip') : undefined;
        this.cancelTip = this.grid.getSetting('actions.cancel').hasOwnProperty('tip')
            ? this.grid.getSetting('actions.cancel.tip') : undefined;
    }
}
