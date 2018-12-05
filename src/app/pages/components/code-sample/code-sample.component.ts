import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'app-code-sample',
    templateUrl: './code-sample.component.html',
    styleUrls: ['./code-sample.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class CodeSampleComponent implements OnInit {

    sampleCode: string = `<div class="test">{{test}}</div>`;

    constructor() {
    }

    ngOnInit() {
    }

}
