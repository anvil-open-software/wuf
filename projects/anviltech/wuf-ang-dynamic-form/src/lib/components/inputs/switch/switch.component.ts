import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../../models/field.interface';
import { WufDynamicFormService } from '../../../services/dynamic-form.service.service';
import { Subscription } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'wuf-field-input',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit, OnDestroy {
    field: FieldConfig;
    rootGroup: FormGroup;
    parentGroup: FormGroup;
    translateSubscription: Subscription;

    label: string;
    hint: string;

    constructor(
        public formService: WufDynamicFormService,
        public translate: TranslateService
    ) {
        // Subscribe to language changes
        this.translateSubscription = translate.onLangChange.subscribe(($event: LangChangeEvent) => {
            this.onLanguageChange($event);
        });
    }

    ngOnInit() {
        this.translateStrings();
    }

    ngOnDestroy() {
        // unsubscribe from language changes
        if (this.translateSubscription && !this.translateSubscription.closed) {
            this.translateSubscription.unsubscribe();
        }
    }

    private onLanguageChange($event: any) {
        // Language has changed.  Now update the display.
        this.translateStrings();
    }

    /**
     * If this field has a property for display, use it.  Otherwise, use the translationKey to translate displayed strings using
     * ngx-translate.
     */
    private translateStrings() {
        // Get label
        if (this.field.hasOwnProperty('label') && this.field.label) {
            this.label = this.field.label;
        }
        else {
            if (this.field.hasOwnProperty('translationKey') && this.field.translationKey.hasOwnProperty('label')) {
                this.translate.get(this.field.translationKey.label).subscribe((res: string) => {
                    // If the returned value is the same as the key, there is no translation string, so return undefined
                    this.label = res !== this.field.translationKey.label ? res : undefined;
                });
            }
        }

        // Get hint
        if (this.field.hasOwnProperty('hint') && this.field.hint) {
            this.hint = this.field.hint;
        }
        else {
            if (this.field.hasOwnProperty('translationKey') && this.field.translationKey.hasOwnProperty('hint')) {
                this.translate.get(this.field.translationKey.hint).subscribe((res: string) => {
                    // If the returned value is the same as the key, there is no translation string, so return undefined
                    this.hint = res !== this.field.translationKey.hint ? res : undefined;
                });
            }
        }
    }

    /**
     * If this validator has a message, use it.  Otherwise, use the translationKey to translate displayed strings using
     * ngx-translate.
     */
    getValidationMessage(validation) {
        let message: string;

        // Get validation message
        if (validation.hasOwnProperty('message') && validation.message) {
            message = validation.message;
        }
        else {
            if (validation.hasOwnProperty('translationKey') && validation.translationKey.message) {
                this.translate.get(validation.translationKey.message).subscribe((res: string) => {
                    // If the returned value is the same as the key, there is no translation string, so return undefined
                    message = res !== validation.translationKey.message ? res : undefined;
                });
            }
        }

        return message;
    }
}
