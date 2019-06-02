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

import { Grid } from '../../../services/grid';
import { DataSource } from '../../../data-source/data-source';


@Component({
    selector: '[wuf-st-add-button]',
    template: `        
        <!-- icon button -->
        <button
            *ngIf="!label"
            mat-raised-button
            class="wuf-smart-action wuf-smart-action-icon wuf-smart-action-add"
            (click)="onAdd($event)"
            [matTooltip]="tip | translate"
            matTooltipPosition="left">
            <mat-icon>add</mat-icon>
        </button>
        <!-- button with label -->
        <button
            *ngIf="label"
            mat-raised-button
            class="wuf-smart-action wuf-smart-action-button wuf-smart-action-add"
            (click)="onAdd($event)"
            matTooltipPosition="left">
            {{label | translate}}
        </button>
    `,
    encapsulation: ViewEncapsulation.None
})
export class AddButtonComponent implements AfterViewInit, OnChanges {

    @Input() grid: Grid;
    @Input() position: string;
    @Input() source: DataSource;
    @Output() create = new EventEmitter<any>();

    isAddButton: boolean;
    isCreateFormShownAlways: boolean;
    label: string;
    tip: string;

    constructor(private ref: ElementRef) {
    }

    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('wuf-smart-actions-title', 'wuf-smart-actions-title-add');
    }

    ngOnChanges() {
        this.isAddButton = this.grid.showButton('add', this.position);
        this.isCreateFormShownAlways = this.grid.getSetting('actions.add.createFormShownAlways');

        this.label = this.grid.getSetting('actions.add').hasOwnProperty('label')
            ? this.grid.getSetting('actions.add.label') : undefined;
        this.tip = this.grid.getSetting('actions.add').hasOwnProperty('tip')
            ? this.grid.getSetting('actions.add.tip') : undefined;
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
