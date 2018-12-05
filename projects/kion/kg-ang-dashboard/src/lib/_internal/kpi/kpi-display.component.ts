import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { KgDashboardService } from '../kg-dashboard.service';


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

    constructor(public dashboardService: KgDashboardService) {
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
                    bgColor = 'var(--kg-color-primary)';
                    stripeColor = 'var(--kg-color-primary-lighter-10)';
                    break;
                case 'secondary':
                    bgColor = 'var(--kg-color-secondary)';
                    stripeColor = 'var(--kg-color-secondary-lighter-10)';
                    break;
                case 'accent':
                    bgColor = 'var(--kg-color-accent)';
                    stripeColor = 'var(--kg-color-accent-lighter-10)';
                    break;
                case 'success':
                    bgColor = 'var(--kg-color-success)';
                    stripeColor = 'var(--kg-color-success-lighter-10)';
                    break;
                case 'info':
                    bgColor = 'var(--kg-color-info)';
                    stripeColor = 'var(--kg-color-info-lighter-10)';
                    break;
                case 'warning':
                    bgColor = 'var(--kg-color-warning)';
                    stripeColor = 'var(--kg-color-warning-lighter-10)';
                    break;
                case 'danger':
                    bgColor = 'var(--kg-color-danger)';
                    stripeColor = 'var(--kg-color-danger-lighter-10)';
                    break;
                default:
                    bgColor = 'inherit';
                    stripeColor = 'var(--kg-color-primary-lighter-10)';
            }

            if (bgColor) {
                this.el.nativeElement.style.setProperty('--kpi-stripe-color', stripeColor);
                this.el.nativeElement.style.setProperty('--kpi-active-stripe-color', stripeColor);
                this.el.nativeElement.style.setProperty('--kpi-active-bg-color', bgColor);
            }
        }
    }

}
