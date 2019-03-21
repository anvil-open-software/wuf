/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';


@Component({
    selector: 'app-i18n',
    templateUrl: './i18n-ngx-translate.component.html',
    styleUrls: ['./i18n-ngx-translate.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class I18nNgxTranslateComponent implements OnInit, OnDestroy {

    currentLanguage: string;

    constructor(public translate: TranslateService) {
        translate.onLangChange.subscribe(($event: LangChangeEvent) => {
            this.onLanguageChange($event);
        });
    }

    ngOnInit() {
        this.currentLanguage = this.translate.currentLang ? this.translate.currentLang : 'en';
    }

    ngOnDestroy() {
    }

    onLanguageChange($event: any) {
        // Language has changed.  Now do something.
    }

    onLanguageSelectionChange($event: any) {
        this.translate.use(this.currentLanguage);
    }

}
