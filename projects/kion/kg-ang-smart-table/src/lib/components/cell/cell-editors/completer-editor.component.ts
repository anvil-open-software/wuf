/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { CompleterService } from 'ng2-completer';

import { KgSmartTableDefaultEditor } from './default-editor';


@Component({
    selector: 'completer-editor',
    template: `
        <!--<ng2-completer [(ngModel)]="completerStr"-->
                       <!--[formControl]="cell.getValidator()"-->
                       <!--[dataService]="cell.getColumn().getConfig().completer.dataService"-->
                       <!--[minSearchLength]="cell.getColumn().getConfig().completer.minSearchLength || 0"-->
                       <!--[pause]="cell.getColumn().getConfig().completer.pause || 0"-->
                       <!--[placeholder]="cell.getColumn().getConfig().completer.placeholder || 'Start typing...'"-->
                       <!--(selected)="onEditedCompleter($event)">-->
        <!--</ng2-completer>-->
    `,
    encapsulation: ViewEncapsulation.None
})
export class CompleterEditorComponent extends KgSmartTableDefaultEditor implements OnInit {

    completerStr: string = '';

    // constructor(private completerService: CompleterService) {
    //     super();
    // }
    constructor() {
        super();
    }

    ngOnInit() {
        if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
            const config = this.cell.getColumn().getConfig().completer;
            // config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
        }
    }

    onEditedCompleter(event: { title: '' }): boolean {
        this.cell.newValue = event.title;
        return false;
    }
}
