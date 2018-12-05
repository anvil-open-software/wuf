import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormSettingsService } from '../form.service';


@Component({
    selector: 'app-form-dialog',
    templateUrl: 'form.dialog.component.html',
    styleUrls: ['form.dialog.component.scss']
})
export class FormDialogExample {

    title: string;
    handlerSelection = 'option1';
    lastRunDate: any = new Date();
    nextRunDate: any = new Date();

    constructor(
        public dialogRef: MatDialogRef<FormDialogExample>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public formSettingsService: FormSettingsService
    ) {}

    onCancelClick(): void {
        this.dialogRef.close();
    }

}
