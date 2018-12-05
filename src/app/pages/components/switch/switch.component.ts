import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class SwitchComponent implements OnInit {
    color = 'accent';
    squareColor: string = 'blue';
    nextSquareColor: string = 'green';

    constructor() {
    }

    onChange(checked) {
        // console.log('checked: ' + checked)
        this.squareColor = this.squareColor === 'blue' ? 'green' : 'blue';
        this.nextSquareColor = this.nextSquareColor === 'blue' ? 'green' : 'blue';
    }

    ngOnInit() {
    }
}
