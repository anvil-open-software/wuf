/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { KgSidebarService } from '../sidebar.service';


@Component({
    selector: 'kg-sidebar-footer',
    templateUrl: './sidebar-footer.component.html',
    styleUrls: ['./sidebar-footer.component.scss'],
    encapsulation: ViewEncapsulation.None // NOTE: There is no shadow DOM used for this component so that the
    // following styles can be applied to content passed via content projection.
})
export class KgSidebarFooterComponent implements OnInit {
    @Input() data?: any = [];
    @Input() dataUrl?: string;
    @Input() copyrightName ? = 'Dematic, Inc.';

    hasData: boolean;
    footerData: any = [];
    year: any = new Date().getFullYear();

    constructor(public kgSidebarService: KgSidebarService) {
    }

    ngOnInit() {
        this.hasData = (this.dataUrl || this.data.length) ? true : false;
        this.getFooterData();
    }

    getFooterData() {
        if (this.dataUrl) {
            this.kgSidebarService.getSidebarFooterData(this.dataUrl)
            .subscribe(
                (results: any) => {
                    this.footerData = results.data.items;
                },
                (err: any) => {
                    console.error('Error retrieving sidebar footer data:', err);
                    this.hasData = false;
                }
            );
        } else if (this.data) {
            this.footerData = this.data;
        }
    }

}
