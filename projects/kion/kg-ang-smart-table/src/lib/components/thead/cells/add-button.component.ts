/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import {
    Component,
    Input,
    Output,
    EventEmitter,
    AfterViewInit,
    ElementRef,
    OnChanges,
    ViewEncapsulation
} from '@angular/core';

import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';


@Component({
    selector: '[kg-st-add-button]',
    template: `

        <button mat-raised-button
                *ngIf="isActionAdd && !isCreateFormShownAlways && addNewButtonContent"
                class="kg-smart-action kg-smart-action-add-add"
                [innerHTML]="addNewButtonContent"
                (click)="onAdd($event)"></button>
        <button mat-raised-button
                *ngIf="isActionAdd && !isCreateFormShownAlways && !addNewButtonContent"
                class="kg-smart-action kg-smart-action-add-add"
                (click)="onAdd($event)"
                [matTooltip]="addTip"
                matTooltipPosition="above">
            <mat-icon>add</mat-icon>
        </button>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AddButtonComponent implements AfterViewInit, OnChanges {

    @Input() grid: Grid;
    @Input() source: DataSource;
    @Output() create = new EventEmitter<any>();

    isActionAdd: boolean;
    isCreateFormShownAlways: boolean;
    addNewButtonContent: string;
    addTip: string;

    constructor(private ref: ElementRef) {
    }

    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('kg-smart-actions-title', 'kg-smart-actions-title-add');
    }

    ngOnChanges() {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isCreateFormShownAlways = this.grid.getSetting('add.createFormShownAlways');
        this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
        this.addTip = this.grid.getSetting('add.addTip');
    }

    onAdd(event: any) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source
            });
        } else if (!this.isCreateFormShownAlways) {
            this.grid.createFormShown = true;
        }
    }
}
