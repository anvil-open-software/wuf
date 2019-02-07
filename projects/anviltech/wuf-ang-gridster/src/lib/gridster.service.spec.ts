/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { TestBed } from '@angular/core/testing';

import { WufGridsterService } from './gridster.service';


describe('WufGridsterService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: WufGridsterService = TestBed.get(WufGridsterService);
        expect(service).toBeTruthy();
    });
});
