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
import { CustomRenderForGradeSmartTable } from './custom-render.smart-table.for-grade.component';
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
        selectMode: 'single', //single/multi,
        width: '100%',
        valign: 'middle',
        hover: true,
        alternatingRowColors: true,
        noDataMessage: 'No data found',
        columns: {
            id: {
                title: 'ID',
                width: '15%',
                type: 'html',
                editor: {
                    type: 'custom',
                    component: CustomEditorForIDValidationSmartTable
                }
            },
            name: {
                title: 'Full Name',
                width: '15%',
                type: 'html',
                editor: {
                    type: 'custom',
                    component: CustomEditorForNameValidationSmartTable
                }
            },
            foods: {
                title: 'Favorite Foods',
                type: 'html',
                editor: {
                    type: 'custom',
                    // example of custom-editor component
                    component: CustomEditorForFoodsSmartTable
                }
            },
            grade: {
                title: 'Grade',
                type: 'custom',
                // example of custom-render component
                renderComponent: CustomRenderForGradeSmartTable
            }
        },
        actions: {
            //position of actions column
            position: 'right',

            //whether to show the add/delete/edit button
            add: true,
            delete: true,
            edit: true

        },
        add: {
            // whether to trigger createConfirm output event
            confirmCreate: true
        },
        delete: {
            // whether to trigger deleteConfirm output event
            confirmDelete: true
            // Example of using a button instead of the default icon:
            // deleteButtonContent: "world"
            // deleteTip: 'I am a tooltip!'
        },
        edit: {
            // whether to trigger editConfirm output event
            confirmSave: true
            // Example of using a button instead of the default icon:
            // editButtonContent: "hello"
        },
        pager: {
            display: true,
            perPage: 3
        },
        filter: {
            placeholder: 'Filter...'
        }
    };

    // Example dummy data.  This should be loaded via a service
    private smartTableDummyData = [
        {id: 1, name: 'John', foods: 'pizza', grade: '25%'},
        {id: 2, name: 'Kate', foods: 'dumplings, hamburger', grade: '50%'},
        {id: 3, name: 'Bob', foods: 'lobster', grade: '75%'},
        {id: 4, name: 'Harry', foods: 'steak, pizza', grade: '100%'}
    ];

    constructor() {
    }

    getData() {
        this.smartTableData = new WufSmartTableLocalDataSource();

        // Usually you would get data via a service and subscribe to the results.
        // For demo purposes, however, we are simply setting a timeout to simulate
        // server latency and then setting the data using functions available
        // from the DataSource object.

        this.smartTableData.setLoading(); // Display the loading indicator
        setTimeout(() => {
            this.smartTableData.load(this.smartTableDummyData);
            this.smartTableData.setLoaded(); // Turn off the loading indicator
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

    ngOnInit() {

        this.getData();
    }
}
