/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';


@Component({
    selector: 'app-i18n',
    templateUrl: './i18n-ang.component.html',
    styleUrls: ['./i18n-ang.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class I18nAngularComponent implements OnInit, OnDestroy {

    // Change these values to see cardinality in action
    count: number = 0;
    gender: string = 'f';
    exampleCode: string = `
<p class="example" i18n="use of nested pluralization|An example of using nested pluralization and selection@@pluralization" id="example_pluralization">
    Our wolf pack:
    { count, plural,
    =0 {has no wolves}
    =1 {has one {gender, select, m {male wolf} f {female wolf}}}
    =2 {has two {gender, select, m {male wolves} f {female wolves}}}
    =3 {has a few {gender, select, m {male wolves} f {female wolves}}}
    other {has many {gender, select, m {male wolves} f {female wolves}}}
    }.
</p>`;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

}
