/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, ViewEncapsulation } from '@angular/core';

import { WufSmartTableDefaultEditor } from './default-editor';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'input-editor',
    styleUrls: ['./editor.component.scss'],
    template: `


        <mat-form-field>
            <input
                   matInput
                   class="form-control"
                   [formControl]="cell.getValidator()"
                   [(ngModel)]="cell.newValue"
                   [name]="cell.getId()"
                   [placeholder]="cell.getTitle() | translate"
                   [disabled]="!cell.isEditable()"
                   (click)="onClick.emit($event)"
                   (keydown.enter)="onEdited.emit($event)"
                   (keydown.esc)="onStopEditing.emit()">
        </mat-form-field>
    `,
    encapsulation: ViewEncapsulation.None
})
export class InputEditorComponent extends WufSmartTableDefaultEditor {

    constructor(public translate: TranslateService) {
        super();
    }
}
