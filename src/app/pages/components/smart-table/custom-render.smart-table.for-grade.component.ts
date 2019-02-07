/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import {Component, Input, OnInit, ViewChild} from '@angular/core';

import {WufSmartTableViewCell} from '@anviltech/wuf-ang-smart-table';


// import {NgbPopover} from '@ng-bootstrap/ng-bootstrap';

@Component({
    template: `
   <div class="progress">
    <div class="progress-bar bg-success" [style.width]="progressBarWidth">
        <span>{{progressBarWidth}}</span>
    </div>
</div>
  `,
})
export class CustomRenderForGradeSmartTable implements WufSmartTableViewCell, OnInit {

    public progressBarWidth: string;
    @Input() value: string | number;
    @Input() rowData: any;

    ngOnInit() {
        this.progressBarWidth = this.value.toString();
    }

}
