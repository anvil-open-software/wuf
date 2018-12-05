import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { KgDrawerService } from '@kion/kg-ang-drawer';


@Component({
    selector: 'app-cards',
    templateUrl: './drawer.component.html',
    styleUrls: ['./drawer.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class DrawerComponent implements OnInit {

    constructor(private drawerService: KgDrawerService) {
    }

    ngOnInit() {
    }

    openDrawer() {
        this.drawerService.show('helloDrawer');
    }
}
