/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { WufGridsterService } from '@anviltech/wuf-ang-gridster';


@Component({
    selector: 'app-cards',
    templateUrl: './gridster.component.html',
    styleUrls: ['./gridster.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class GridsterComponent implements OnInit, OnDestroy {

    gridsterUpdateSubscription: Subscription;

    gridsterItems = [
        {cols: 2, rows: 1, y: 0, x: 0, title: '1. Normal Card'},
        {cols: 1, rows: 1, y: 1, x: 0, title: '2. Normal Card'},
        {cols: 1, rows: 1, y: 1, x: 1, title: '3. Normal Card'},
        {cols: 1, rows: 1, y: 0, x: 2, title: '4. Normal Card'},
        {cols: 2, rows: 2, y: 0, x: 3, dragEnabled: false, resizeEnabled: false, title: '5. Drag & Resize Disabled'},
        {cols: 2, rows: 2, y: 0, x: 5, title: '6. Normal Card'},
        {cols: 2, rows: 2, y: 2, x: 0, maxItemRows: 2, maxItemCols: 2, title: '7. Max rows & cols = 2'},
        {cols: 1, rows: 3, y: 1, x: 2, title: '8. Normal Card'},
        {cols: 3, rows: 2, y: 2, x: 3, minItemRows: 2, minItemCols: 2, title: '9. Min rows & cols = 2'},
        {cols: 1, rows: 1, y: 2, x: 6, title: '10. Normal Card'},
        {cols: 1, rows: 1, y: 3, x: 6, title: '11. Normal Card'}
    ];

    constructor(public gridster: WufGridsterService) {
    }

    ngOnInit() {
        this.gridsterUpdateSubscription = this.gridster.onUpdate().subscribe(
            results => {
                // Received notification of gridster update
                console.log('Gridster updated with type = ' + results.action);
                console.log('New gridster items data:', results.items);
                // You can now send data to the server for storage
            },
            err => {
                console.warn('error on gridster update:', err);
            }
        );
    }

    ngOnDestroy() {
        this.gridsterUpdateSubscription.unsubscribe();
    }

    onAddItemClick() {
        this.gridster.add({x: 0, y: 0, cols: 1, rows: 1, title: "I'm a new item"});
    }

    serviceCode = `
import { Subscription } from 'rxjs';
import { WufGridsterService } from '@anviltech/wuf-ang-gridster';


@Component({
    selector: 'app-cards',
    templateUrl: './gridster.component.html',
    styleUrls: ['./gridster.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class GridsterComponent implements OnInit, OnDestroy {

    gridsterUpdateSubscription: Subscription;

    constructor(public gridster: WufGridsterService) {
    }

    ngOnInit() {
        this.gridsterUpdateSubscription = this.gridster.onUpdate().subscribe(
            results => {
                // Received notification of gridster update
                console.log('Gridster updated with type = ' + results.action);
                console.log('New gridster items data:', results.items);
                // You can now send data to the server for storage
            },
            err => {
                console.warn('error on gridster update:', err);
            }
        );
    }

    ngOnDestroy() {
        this.gridsterUpdateSubscription.unsubscribe();
    }

    onAddItemClick() {
        this.gridster.add({x: 0, y: 0, cols: 1, rows: 1, title: "I'm a new item"});
    }
    
    `;

}
