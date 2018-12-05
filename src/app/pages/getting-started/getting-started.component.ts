import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

import { KgContentFooterService } from '@kion/kg-ang-layout';


@Component({
    selector: 'app-home',
    templateUrl: './getting-started.component.html',
    styleUrls: ['./getting-started.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class GettingStartedComponent implements OnInit, OnDestroy {
    constructor(private kgContentFooterService: KgContentFooterService) {
    }

    ngOnInit() {
        // this.kgContentFooterService.showFooter();
    }

    ngOnDestroy() {
        // this.kgContentFooterService.hideFooter();
    }
}
