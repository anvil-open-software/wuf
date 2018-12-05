/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


const now = new Date();

@Component({
    selector: 'app-code-sample',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
    startDate = new FormControl(new Date());

    model: any;

    constructor() {
    }

    ngOnInit() {
    }

    selectDate(dateType: string) {
        switch (dateType) {
            case 'today':
                this.startDate = new FormControl(new Date());
                break;
            case 'nextMonth':
                let current;
                if (now.getMonth() === 11) {
                    current = new Date(now.getFullYear() + 1, 0, 1);
                } else {
                    current = new Date(now.getFullYear(), now.getMonth() + 1, 1);
                }
                this.startDate = new FormControl(current);
                break;
            case 'feb23':
                this.startDate = new FormControl(new Date(2023, 1, 1));
                break;
            default:
                this.startDate = new FormControl(new Date());
                break;
        }
    }
}
