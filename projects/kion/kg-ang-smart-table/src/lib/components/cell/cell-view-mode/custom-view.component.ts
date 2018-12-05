/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import {
    Component,
    Input,
    ComponentFactoryResolver,
    ViewChild,
    ViewContainerRef,
    OnInit,
    OnDestroy,
    ViewEncapsulation
} from '@angular/core';

import { KgSmartTableCell } from '../../../lib/data-set/cell';
import { KgSmartTableViewCell } from './view-cell';


@Component({
    selector: 'custom-view-component',
    template: `
        <ng-template #dynamicTarget></ng-template>
    `,
    encapsulation: ViewEncapsulation.None
})
export class CustomViewComponent implements OnInit, OnDestroy {

    customComponent: any;
    @Input() cell: KgSmartTableCell;
    @ViewChild('dynamicTarget', {read: ViewContainerRef}) dynamicTarget: any;

    constructor(private resolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    }

    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }

    protected createCustomComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    }

    protected callOnComponentInit() {
        const onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    }

    protected patchInstance() {
        Object.assign(this.customComponent.instance, this.getPatch());
    }

    protected getPatch(): KgSmartTableViewCell {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    }
}
