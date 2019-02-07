/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { WufDashboardService } from '../dashboard.service';


@Component({
    selector: 'kpi-display',
    templateUrl: './kpi-display.component.html',
    styleUrls: ['./kpi-display.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class KpiDisplayComponent implements OnInit {

    @Input() value?: any;
    @Input() label: string;
    @Input() color?: string;
    @Input() id: string;
    @Input() disabled?: boolean;
    @ViewChild('kpi') el: ElementRef;

    constructor(public dashboardService: WufDashboardService) {
    }

    ngOnInit() {
        this.setColor();
    }

    onKpiClick($event: any) {
        if (this.disabled) return false;
        this.dashboardService.setActive(this.id);
    }

    /*
      Set side stroke color based on color attribute
     */
    setColor() {
        if (this.color) {
            let bgColor: string;
            let stripeColor: string;

            switch (this.color) {
                case 'primary':
                    bgColor = 'var(--wuf-color-primary)';
                    stripeColor = 'var(--wuf-color-primary-lighter-10)';
                    break;
                case 'secondary':
                    bgColor = 'var(--wuf-color-secondary)';
                    stripeColor = 'var(--wuf-color-secondary-lighter-10)';
                    break;
                case 'accent':
                    bgColor = 'var(--wuf-color-accent)';
                    stripeColor = 'var(--wuf-color-accent-lighter-10)';
                    break;
                case 'success':
                    bgColor = 'var(--wuf-color-success)';
                    stripeColor = 'var(--wuf-color-success-lighter-10)';
                    break;
                case 'info':
                    bgColor = 'var(--wuf-color-info)';
                    stripeColor = 'var(--wuf-color-info-lighter-10)';
                    break;
                case 'warning':
                    bgColor = 'var(--wuf-color-warning)';
                    stripeColor = 'var(--wuf-color-warning-lighter-10)';
                    break;
                case 'danger':
                    bgColor = 'var(--wuf-color-danger)';
                    stripeColor = 'var(--wuf-color-danger-lighter-10)';
                    break;
                default:
                    bgColor = 'inherit';
                    stripeColor = 'var(--wuf-color-primary-lighter-10)';
            }

            if (bgColor) {
                this.el.nativeElement.style.setProperty('--kpi-stripe-color', stripeColor);
                this.el.nativeElement.style.setProperty('--kpi-active-stripe-color', stripeColor);
                this.el.nativeElement.style.setProperty('--kpi-active-bg-color', bgColor);
            }
        }
    }

}
