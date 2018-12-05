import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'app-utilities',
    templateUrl: './utilities.component.html',
    styleUrls: ['./utilities.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class UtilitiesComponent implements OnInit {

    constructor() {
    }

    // Test capitalization
    public string_1: string = 'abc';
    public string_2: string = 'abc def';
    public string_3: string = 'Abc';
    public string_4: string = 'aBc';
    public string_5: string = '123';

    ngOnInit() {
    }
}
