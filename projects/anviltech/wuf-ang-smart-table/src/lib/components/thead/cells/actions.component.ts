/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../../services/grid';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'wuf-st-actions',
    template: `
        
        <!-- save button -->
        <!-- icon button -->
        <button mat-icon-button
            *ngIf="!createLabel"
            class="wuf-smart-action wuf-smart-action-icon wuf-smart-action-add-create"
            (click)="$event.preventDefault();create.emit($event)"
            [matTooltip]="createTip | translate"
            matTooltipPosition="left">
            <mat-icon>done</mat-icon>
        </button>
        <!-- button with text label -->
        <button mat-raised-button
            *ngIf="createLabel"
            color="primary"
            class="wuf-smart-action wuf-smart-action-button wuf-smart-action-add-create"
            (click)="$event.preventDefault();create.emit($event)">
            {{createLabel | translate}}
        </button>

        <!-- cancel button -->
        <!-- icon button -->
        <button mat-icon-button
            *ngIf="!cancelLabel"
            class="wuf-smart-action wuf-smart-action-icon wuf-smart-action-add-cancel"
            (click)="cancelButton($event)"
            [matTooltip]="cancelTip | translate"
            matTooltipPosition="left">
            <mat-icon>clear</mat-icon>
        </button>
        <!-- button with text label -->
        <button mat-raised-button
            *ngIf="cancelLabel"
            class="wuf-smart-action wuf-smart-action-button wuf-smart-action-add-cancel"
            (click)="cancelButton($event)">
            {{cancelLabel | translate}}
        </button>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ActionsComponent implements OnChanges {

    @Input() grid: Grid;
    @Output() create = new EventEmitter<any>();

    createFormShownAlways: boolean;
    cancelLabel: string;
    createLabel: string;
    createTip: string;
    cancelTip: string;

    constructor(public translate: TranslateService) {}

    ngOnChanges() {

        this.createLabel = this.grid.getSetting('actions.create').hasOwnProperty('label')
            ? this.grid.getSetting('actions.create.label') : undefined;
        this.cancelLabel = this.grid.getSetting('actions.cancel').hasOwnProperty('label')
            ? this.grid.getSetting('actions.cancel.label') : undefined;

        this.createTip = this.grid.getSetting('actions.create').hasOwnProperty('tip')
            ? this.grid.getSetting('actions.create.tip') : undefined;
        this.cancelTip = this.grid.getSetting('actions.cancel').hasOwnProperty('tip')
            ? this.grid.getSetting('actions.cancel.tip') : undefined;
    }

    cancelButton(event: any) {
        event.preventDefault();
        if (!this.createFormShownAlways) {
            this.grid.createFormShown = false;
        }
        this.grid.dataSet.newRowValidator.reset();
    }
}
