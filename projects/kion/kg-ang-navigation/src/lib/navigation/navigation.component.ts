/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';

import { KgNavigationService } from '../navigation.service';
import { KgConfigurationService } from '@kion/kg-ang-configuration';


@Component({
    selector: 'kg-navigation',
    styleUrls: ['navigation.component.scss'],
    templateUrl: 'navigation.component.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class KgNavigationComponent implements OnInit, OnChanges {
    @Input() dataUrl?: string;
    @Input() data?: any;
    @Input() position?: string = 'left';
    @Input() iconPosition?: string = 'left';
    @Input() alignment?: string = 'left';

    navData: any;

    constructor(private navService: KgNavigationService, public configService: KgConfigurationService) {
    }

    /** Get nav data from service or from passed object.  Use it to construct the navigation elements.
     * This method uses either a data object OR fetches a data object via passed URL, not both.
     */
    getNavData() {
        if (this.dataUrl) {
            this.navService.getNavData(this.dataUrl)
                .subscribe(
                    (results: any) => {
                        this.navData = results.data.links;
                    },
                    (err: any) => {
                        console.error('Error retrieving nav data:', err);
                    }
                );
        } else if (this.data) {
            this.navData = this.data;
        }
    }

    ngOnInit() {
        this.getNavData();
    }

    // Detect changes to @Input properties
    ngOnChanges(changes: any) {
        for (const propName in changes) {
            if (changes[propName]) {
                const chng = changes[propName];
                const cur = chng.currentValue;

                if (propName === 'data' && cur) {
                    this.navData = cur;
                }
            }
        }
    }

}
