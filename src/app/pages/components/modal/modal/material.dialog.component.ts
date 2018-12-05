import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'material-dialog',
    templateUrl: 'material.dialog.component.html',
    styleUrls: ['./material.dialog.component.scss']
})
export class MaterialDialogExample {

    title: string;
    animal: string;

    constructor(
        public dialogRef: MatDialogRef<MaterialDialogExample>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
