/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
    selector: 'app-web-messages',
    templateUrl: './web-messages.component.html',
    styleUrls: ['./web-messages.component.scss']
})
export class WebMessagesComponent implements OnInit {
    @ViewChild('wm', {static: false}) wm: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

    onShowErrorMessageClick() {
        // console.log('WufWebMessagesComponent::onShowErrorMessageClick');
        this.wm.nativeElement.errorMessage = `Danger, Will Robinson!`;
    }

    onShowInfoMessageClick() {
        // console.log('WufWebMessagesComponent::onShowInfoMessageClick');
        this.wm.nativeElement.infoMessage = `Did you know that astronauts never snore? Sleep apnea can't happen without gravity!`;
    }

    onShowSuccessMessageClick() {
        // console.log('WufWebMessagesComponent::onShowSuccessMessageClick');
        this.wm.nativeElement.successMessage = `I'm ok!`;
    }

    onShowWarningMessageClick() {
        // console.log('WufWebMessagesComponent::onShowWarningMessageClick');
        this.wm.nativeElement.warningMessage = `The "check engine" light is on.`;
    }

    onClearAllMessagesClick() {
        this.wm.nativeElement.clearAll();
    }
}
