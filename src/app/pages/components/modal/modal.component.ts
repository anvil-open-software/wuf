import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MaterialDialogExample } from './modal/material.dialog.component';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ModalComponent implements OnInit {
    public thisForm: FormGroup;
    public modalObj: any;
    public modalIsOpen: boolean = false;
    public message: string = '';
    public item: any;

    // Material Dialog vars
    animal: string;
    title: string = 'Material Modal';

    constructor(public materialDialog: MatDialog) {
    }

    onModalOutput(item: any) {
        console.log('item: ', item);
        this.modalIsOpen = true;
        this.item = JSON.stringify(item);
    }

    buildForm(): void {
        this.thisForm = new FormGroup({
            name: new FormControl('', []),
            description: new FormControl('', [])
        });
    }

    openMaterialDialog() {
        const dialogRef = this.materialDialog.open(MaterialDialogExample, {
            width: '500px',
            data: {title: this.title, animal: this.animal}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }

    ngOnInit() {
        this.buildForm();
        this.modalObj = {'name': '', 'description': ''};
    }
}
