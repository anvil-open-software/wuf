/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

import { GridsterConfig, GridType, CompactType, DisplayGrid } from 'angular-gridster2';
import { WufGridsterItem } from './gridster.interface';
import { WufGridsterService } from './gridster.service';


@Component({
    selector: 'wuf-gridster',
    templateUrl: 'gridster.component.html',
    styleUrls: ['gridster.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class WufGridsterComponent implements OnInit {

    options: GridsterConfig;

    @Input() items: Array<WufGridsterItem>;

    // Default values
    @Input() outerMargin: boolean = true;
    @Input() draggable: boolean = true;
    @Input() resizable: boolean = true;

    constructor(public gridsterService: WufGridsterService) {
    }

    ngOnInit() {
        // set options
        this.options = {
            gridType: GridType.Fit,
            compactType: CompactType.None,
            margin: 20,
            outerMargin: this.outerMargin,
            outerMarginTop: null,
            outerMarginRight: null,
            outerMarginBottom: null,
            outerMarginLeft: null,
            mobileBreakpoint: 640,
            minCols: 1,
            maxCols: 100,
            minRows: 1,
            maxRows: 100,
            maxItemCols: 100,
            minItemCols: 1,
            maxItemRows: 100,
            minItemRows: 1,
            maxItemArea: 2500,
            minItemArea: 1,
            defaultItemCols: 1,
            defaultItemRows: 1,
            fixedColWidth: 105,
            fixedRowHeight: 105,
            keepFixedHeightInMobile: false,
            keepFixedWidthInMobile: false,
            scrollSensitivity: 10,
            scrollSpeed: 20,
            enableEmptyCellClick: false,
            enableEmptyCellContextMenu: false,
            enableEmptyCellDrop: false,
            enableEmptyCellDrag: false,
            emptyCellDragMaxCols: 50,
            emptyCellDragMaxRows: 50,
            ignoreMarginInRow: false,
            draggable: {
                enabled: this.draggable
            },
            resizable: {
                enabled: this.resizable
            },
            swap: false,
            pushItems: true,
            disablePushOnDrag: false,
            disablePushOnResize: false,
            pushDirections: {north: true, east: true, south: true, west: true},
            pushResizeItems: true,
            displayGrid: DisplayGrid.OnDragAndResize,
            disableWindowResize: false,
            disableWarnings: false,
            scrollToNewItems: true
        };

        this.gridsterService.items = this.items;
    }

    onDeleteItemClick($event, item) {
        $event.preventDefault();
        $event.stopPropagation();
        this.gridsterService.delete(this.gridsterService.items.indexOf(item));
    }

    onMenuMouseDown($event) {
        // Prevent menu clicking from floating up as a gridster item drag start
        $event.preventDefault();
        $event.stopPropagation();
    }

}
