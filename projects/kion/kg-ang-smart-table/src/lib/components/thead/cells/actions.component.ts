/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';

import { Grid } from '../../../lib/grid';


@Component({
    selector: 'kg-st-actions',
    template: `
        <button mat-button
                *ngIf="createButtonContent"
                class="kg-smart-action kg-smart-action-add-create"
                [innerHTML]="createButtonContent"
                (click)="$event.preventDefault();create.emit($event)"></button>
        <button mat-icon-button
                *ngIf="!createButtonContent"
                class="kg-smart-action kg-smart-action-add-create"
                (click)="$event.preventDefault();create.emit($event)"
                [matTooltip]="createTip"
                matTooltipPosition="left">
            <mat-icon>add</mat-icon>
        </button>

        <button mat-button
                *ngIf="cancelButtonContent"
                class="kg-smart-action kg-smart-action-add-cancel"
                [innerHTML]="cancelButtonContent"
                (click)="cancelButton($event)"></button>
        <button mat-icon-button
                *ngIf="!cancelButtonContent"
                class="kg-smart-action kg-smart-action-add-cancel"
                (click)="cancelButton($event)"
                [matTooltip]="cancelTip"
                matTooltipPosition="left">
            <mat-icon>clear</mat-icon>
        </button>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ActionsComponent implements OnChanges {

    @Input() grid: Grid;
    @Output() create = new EventEmitter<any>();

    createButtonContent: string;
    createTip: string;
    cancelButtonContent: string;
    cancelTip: string;
    createFormShownAlways: boolean;

    ngOnChanges() {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.createTip = this.grid.getSetting('add.createTip');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
        this.cancelTip = this.grid.getSetting('add.cancelTip');
        this.createFormShownAlways = this.grid.getSetting('add.createFormShownAlways');
    }

    cancelButton(event: any) {
        event.preventDefault();
        if (!this.createFormShownAlways)
            this.grid.createFormShown = false;
        this.grid.dataSet.newRowValidator.reset();
    }
}
