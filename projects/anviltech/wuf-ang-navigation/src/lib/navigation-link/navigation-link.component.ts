/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, Input, ViewEncapsulation, ViewChild, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { WufSidebarService } from '@anviltech/wuf-ang-layout';


@Component({
    selector: 'wuf-navigation-link',
    styleUrls: ['navigation-link.component.scss'],
    templateUrl: 'navigation-link.component.html',
    providers: [WufSidebarService],
    encapsulation: ViewEncapsulation.Emulated
})
export class WufNavigationLinkComponent implements OnInit, OnDestroy {
    @Input() link: string;
    @Input() label: string;
    @Input() icon: string;
    @Input() id: string;
    @Input() links: any;
    @Input() activeOptions?: any = { exact: true };
    @Input() position?: string = 'left';
    @Input() iconPosition?: string = 'left';
    @Input() i18nKey?: string;

    @ViewChild('parentNavItem') parentNavItem: any;

    translateSubscription: Subscription;
    isExpanded: boolean;

    constructor(
        public wufSidebarService: WufSidebarService,
        public translate: TranslateService
    ) {
        // Subscribe to language changes
        this.translateSubscription = translate.onLangChange.subscribe(($event: LangChangeEvent) => {
            this.onLanguageChange($event);
        });
    }

    ngOnInit() {
        this.translateLabels();
    }

    ngOnDestroy() {
        // unsubscribe from language changes
        if (this.translateSubscription && !this.translateSubscription.closed) {
            this.translateSubscription.unsubscribe();
        }
    }

    private onLanguageChange($event: any) {
        // Language has changed.  Now update the display.
        this.translateLabels();
    }

    private translateLabels() {
        // If this link has an i18nKey, translate the display label using ngx-translate
        if (this.i18nKey) {
            this.translate.get(this.i18nKey).subscribe((res: string) => {
                this.label = res;
            });
        }

        // Translate labels of children links
        if (this.links) {
            for (let i = 0; i < this.links.length; i++) {
                const currentLink = this.links[i];

                if (currentLink.hasOwnProperty('i18nKey')) {
                    this.translate.get(currentLink.i18nKey).subscribe((res: string) => {
                        currentLink.label = res;
                    });
                }
            }
        }
    }

    private getIsExpanded() {
        return (this.parentNavItem.nativeElement.classList.contains('expanded')) ? true : false;
    }

    toggleCollapse() {
        this.isExpanded = !this.getIsExpanded();
    }

}
