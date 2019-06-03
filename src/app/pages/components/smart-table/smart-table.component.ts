/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// Include the following for Smart Table operations:
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/skip';

// We are going to simulate loading data from a remote source for demo purposes, so include the WufSmartTableLocalDataSource object from wuf-library-angular
import { WufSmartTableLocalDataSource, WufSmartTableValidatorService } from '@anviltech/wuf-ang-smart-table';

// Load custom editors and renderers
import { CustomEditorForFoodsSmartTable } from './custom-editor.smart-table.for-foods.component';
import { CustomRenderForCompleteSmartTable } from './custom-render.smart-table.for-complete.component';
import { CustomEditorForNameValidationSmartTable } from './custom-editor.smart-table.for-name-validation.component';
import { CustomEditorForIDValidationSmartTable } from './custom-editor.smart-table.for-id-validation.component';

import { SmartTableWufSmartTableValidatorService } from './smart-table-validator.service';


@Component({
    selector: 'app-smart-table',
    templateUrl: './smart-table.component.html',
    styleUrls: ['./smart-table.component.scss'],
    providers: [
        {provide: WufSmartTableValidatorService, useClass: SmartTableWufSmartTableValidatorService}
    ],
    encapsulation: ViewEncapsulation.Emulated
})
export class SmartTableComponent implements OnInit {
    // Var for managing table data
    public smartTableData: WufSmartTableLocalDataSource;

    private fakeWaitForServer = 3000;

    // Vars for displaying table info in the UI
    public smartTableInfo: string = '';
    public smartTableSelectedRow: string = '';
    public smartTableSelectedRows: string = '';

    public smartTableSettings = {
        selectMode: 'none', // single/multi/none,
        width: '100%',
        valign: 'middle',
        hover: false,
        alternatingRowColors: true,
        noDataMessage: 'SMARTTABLE.NODATA',
        // hideSubHeader: true,
        title: 'SMARTTABLE.HEADER',
        columns: {
            id: {
                title: 'SMARTTABLE.COLUMNS.ID',
                width: '15%',
                type: 'html',
                editor: {
                    type: 'custom',
                    component: CustomEditorForIDValidationSmartTable
                }
            },
            name: {
                title: 'SMARTTABLE.COLUMNS.NAME',
                width: '15%',
                type: 'html',
                editor: {
                    type: 'custom',
                    component: CustomEditorForNameValidationSmartTable
                }
            },
            foods: {
                title: 'SMARTTABLE.COLUMNS.FOODS',
                type: 'html',
                editor: {
                    type: 'custom',
                    // example of custom-editor component
                    component: CustomEditorForFoodsSmartTable
                }
            },
            complete: {
                title: 'SMARTTABLE.COLUMNS.COMPLETE',
                type: 'custom',
                // example of custom-render component
                renderComponent: CustomRenderForCompleteSmartTable
            }
        },
        actions: {
            title: 'SMARTTABLE.COLUMNS.ACTIONS',

            // Buttons
            add: {
                label: 'SMARTTABLE.ACTIONS.ADD.LABEL', // example use of ngx-translate key
                position: 'header',
                tip: 'SMARTTABLE.ACTIONS.ADD.TIP',
            },
            edit: {
                // label: 'SMARTTABLE.ACTIONS.EDIT.LABEL', // example use of ngx-translate key
                position: 'right',
                tip: 'SMARTTABLE.ACTIONS.EDIT.TIP',
            },
            delete: {
                // label: 'SMARTTABLE.ACTIONS.DELETE.LABEL', // example use of ngx-translate key
                position: 'right',
                tip: 'SMARTTABLE.ACTIONS.DELETE.TIP'
            },
            save: {
                // label: 'SMARTTABLE.ACTIONS.SAVE.LABEL', // example use of ngx-translate key
                tip: 'SMARTTABLE.ACTIONS.SAVE.TIP'
            },
            cancel: {
                // label: 'SMARTTABLE.ACTIONS.CANCEL.LABEL', // example use of ngx-translate key
                tip: 'SMARTTABLE.ACTIONS.CANCEL.TIP'
            },
            create: {
                // label: 'SMARTTABLE.ACTIONS.CREATE.LABEL', // example use of ngx-translate key
                tip: 'SMARTTABLE.ACTIONS.CREATE.TIP'
            }
        },
        pager: {
            display: true,
            perPage: 3
        },
        filter: {
            placeholder: 'SMARTTABLE.FILTER.PLACEHOLDER'
        }
    };

    // Example dummy data.  This should be loaded via a service
    private smartTableDummyData = [
        {id: 1, name: 'John', foods: 'pizza', complete: '25%'},
        {id: 2, name: 'Kate', foods: 'dumplings, hamburger', complete: '50%'},
        {id: 3, name: 'Bob', foods: 'lobster', complete: '75%'},
        {id: 4, name: 'Harry', foods: 'steak, pizza', complete: '100%'}
    ];

    constructor() {
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.smartTableData = new WufSmartTableLocalDataSource();

        // Usually you would get data via a service and subscribe to the results.
        // For demo purposes, however, we are simply setting a timeout to simulate
        // server latency and then setting the data using functions available
        // from the DataSource object.

        this.smartTableData.setLoading(); // Display the loading indicator
        setTimeout(() => {
            this.smartTableData.load(this.smartTableDummyData).then( () => {
                this.smartTableData.setLoaded(); // Turn off the loading indicator
            });
        }, this.fakeWaitForServer);
    }

    addNewUser(element: any) {
        console.log(element, 'this is what we will add');


        this.smartTableInfo = 'The new added data is : ' + JSON.stringify(element.newData);
        if (element.validator.valid) {
            element.confirm.resolve();
        } else if (!element.validator.valid) {
            element.validator.controls.id.pristine = false;
            element.validator.controls.name.pristine = false;
            element.confirm.reject();
        }
    }

    deleteUser(element: any) {
        console.log(element, 'this is what we will delete');

        this.smartTableInfo = 'The deleted data is : ' + JSON.stringify(element.data);
        if (element) {
            element.confirm.resolve();
        } else {
            element.confirm.reject();
        }
    }

    updateUser(element: any) {
        console.log(element, 'this is what we will edit');

        this.smartTableInfo = 'The updated data is : ' + JSON.stringify(element.data) +
            '; The new data is : ' + JSON.stringify(element.newData);
        if (element.validator.valid) {
            element.confirm.resolve();
        } else if (!element.validator.valid) {
            element.confirm.reject();
        }
    }

    selectRow(element: any) {
        this.smartTableSelectedRow = 'The clicked row is : ' + JSON.stringify(element.data)
            + '; isSelected : ' + JSON.stringify(element.isSelected);

        this.smartTableSelectedRows = 'The selected rows are : ' + JSON.stringify(element.selected);
    }
}
