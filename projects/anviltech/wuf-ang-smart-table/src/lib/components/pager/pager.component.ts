/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataSource } from '../../data-source/data-source';


@Component({
    selector: 'wuf-smart-table-pager',
    styleUrls: ['./pager.component.scss'],
    template: `
        <nav *ngIf="shouldShow()" class="wuf-smart-pagination-nav">
            <ul class="wuf-smart-pagination pagination">
                <li class="wuf-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
                    <a class="wuf-smart-page-link page-link" href="#"
                       (click)="getPage() == 1 ? false : paginate(1)" aria-label="First">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">First</span>
                    </a>
                </li>
                <li class="wuf-smart-page-item page-item"
                    [ngClass]="{active: getPage() == page}" *ngFor="let page of getPages()">
                    <span class="wuf-smart-page-link page-link" *ngIf="getPage() == page">{{ page }} <span
                        class="sr-only">(current)</span></span>
                    <a class="wuf-smart-page-link page-link" href="#"
                       (click)="paginate(page)" *ngIf="getPage() != page">{{ page }}</a>
                </li>

                <li class="wuf-smart-page-item page-item"
                    [ngClass]="{disabled: getPage() == getLast()}">
                    <a class="wuf-smart-page-link page-link" href="#"
                       (click)="getPage() == getLast() ? false : paginate(getLast())" aria-label="Last">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Last</span>
                    </a>
                </li>
            </ul>
        </nav>
    `,
    encapsulation: ViewEncapsulation.None
})
export class PagerComponent implements OnChanges {

    @Input() source: DataSource;

    @Output() changePage = new EventEmitter<any>();

    protected pages: Array<any>;
    protected page: number;
    protected count: number = 0;
    protected perPage: number;

    protected dataChangedSub: Subscription;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                if (this.dataChangedSub && !this.dataChangedSub.closed) {
                    this.dataChangedSub.unsubscribe();
                }
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                this.page = this.source.getPaging().page;
                this.perPage = this.source.getPaging().perPage;
                this.count = this.source.count();
                if (this.isPageOutOfBounce()) {
                    this.source.setPage(--this.page);
                }

                this.processPageChange(dataChanges);
                this.initPages();
            });
        }
    }

    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    processPageChange(changes: any) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    }

    shouldShow(): boolean {
        return this.source.count() > this.perPage;
    }

    paginate(page: number): boolean {
        this.source.setPage(page);
        this.page = page;
        this.changePage.emit({page});
        return false;
    }

    getPage(): number {
        return this.page;
    }

    getPages(): Array<any> {
        return this.pages;
    }

    getLast(): number {
        return Math.ceil(this.count / this.perPage);
    }

    isPageOutOfBounce(): boolean {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    }

    initPages() {
        const pagesCount = this.getLast();
        let showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];

        if (this.shouldShow()) {

            let middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;

            let lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;

            const firstOne = lastOne - showPagesCount + 1;

            for (let i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    }
}