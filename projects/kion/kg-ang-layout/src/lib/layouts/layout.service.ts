import { Injectable } from '@angular/core';


@Injectable()
export class KgLayoutService {

    headerVisible: boolean = true;

    constructor() {
    }

    showHeader() {
        this.headerVisible = true;
    }

    hideHeader() {
        this.headerVisible = false;
    }

}
