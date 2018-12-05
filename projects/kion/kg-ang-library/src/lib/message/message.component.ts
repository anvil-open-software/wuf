/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

// Borrowed and modified from https://github.com/magenta-innova/ng2-gui-messages

import { Component, Input, ViewEncapsulation } from '@angular/core';
import { KgMessageService } from './message.service';


@Component({
    selector: 'kg-message',
    templateUrl: 'message.component.html',
    styleUrls: ['message.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class KgMessageComponent {

    /**
     * CSS classes used in error messages box, if no one is specified in the component declaration default ones will be used.
     */
    @Input()
    errorClasses: String = 'message message-dismissible message-danger';

    /**
     * CSS classes used in success messages box, if no one is specified in the component declaration default ones will be used.
     */
    @Input()
    successClasses: String = 'message message-dismissible message-success';

    /**
     * CSS classes used in warning messages box, if no one is specified in the component declaration default ones will be used.
     */
    @Input()
    warningClasses: String = 'message message-dismissible message-warning';

    /**
     * CSS classes used in info messages box, if no one is specified in the component declaration default ones will be used.
     */
    @Input()
    infoClasses: String = 'message message-dismissible message-info';

    hasErrorMessage: boolean = false;
    errorMessages: Array<any>;

    hasSuccessMessage: boolean = false;
    successMessages: Array<any>;

    hasWarningMessage: boolean = false;
    warningMessages: Array<any>;

    hasInfoMessage: boolean = false;
    infoMessages: Array<any>;

    constructor(private messages: KgMessageService) {
        if (messages.checkReadErrorLoadMessages()) {
            this.hasErrorMessage = true;
            this.errorMessages = messages.readErrorLoadMessages() || [];
        }

        if (messages.checkReadSuccessLoadMessages()) {
            this.hasSuccessMessage = true;
            this.successMessages = messages.readSuccessLoadMessages() || [];
        }

        if (messages.checkReadWarningLoadMessages()) {
            this.hasWarningMessage = true;
            this.warningMessages = messages.readWarningLoadMessages() || [];
        }

        if (messages.checkReadInfoLoadMessages()) {
            this.hasInfoMessage = true;
            this.infoMessages = messages.readInfoLoadMessages() || [];
        }
    }

    getErrorMessages() {
        if (this.messages.checkReadErrorLiveMessages()) {
            this.hasErrorMessage = true;
            this.errorMessages = this.messages.readErrorLiveMessages() || [];
        }
        return this.errorMessages;
    }

    checkErrorMessage() {
        if (this.hasErrorMessage || this.messages.checkReadErrorLiveMessages()) {
            this.hasErrorMessage = true;
            return this.hasErrorMessage;
        } else {
            return false;
        }
    }

    getSuccessMessages() {
        if (this.messages.checkReadSuccessLiveMessages()) {
            this.hasSuccessMessage = true;
            this.successMessages = this.messages.readSuccessLiveMessages() || [];
        }
        return this.successMessages;
    }

    checkSuccessMessage() {
        if (this.hasSuccessMessage || this.messages.checkReadSuccessLiveMessages()) {
            this.hasSuccessMessage = true;
            return this.hasSuccessMessage;
        } else {
            return false;
        }
    }

    getWarningMessages() {
        if (this.messages.checkReadWarningLiveMessages()) {
            this.hasWarningMessage = true;
            this.warningMessages = this.messages.readWarningLiveMessages() || [];
        }
        return this.warningMessages;
    }

    checkWarningMessage() {
        if (this.hasWarningMessage || this.messages.checkReadWarningLiveMessages()) {
            this.hasWarningMessage = true;
            return this.hasWarningMessage;
        } else {
            return false;
        }
    }

    getInfoMessages() {
        if (this.messages.checkReadInfoLiveMessages()) {
            this.hasInfoMessage = true;
            this.infoMessages = this.messages.readInfoLiveMessages() || [];
        }
        return this.infoMessages;
    }

    checkInfoMessage() {
        if (this.hasInfoMessage || this.messages.checkReadInfoLiveMessages()) {
            this.hasInfoMessage = true;
            return this.hasInfoMessage;
        } else {
            return false;
        }
    }
}
