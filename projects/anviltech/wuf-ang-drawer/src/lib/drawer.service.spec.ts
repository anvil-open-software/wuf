/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { TestBed } from '@angular/core/testing';

import { WufDrawerService } from './drawer.service';


describe('WufDrawerService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: WufDrawerService = TestBed.get(WufDrawerService);
        expect(service).toBeTruthy();
    });
});
