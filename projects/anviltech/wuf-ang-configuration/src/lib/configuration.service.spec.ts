/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { TestBed } from '@angular/core/testing';

import { WufConfigurationService } from './configuration.service';


describe('WufConfigurationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should create', () => {
        const service: WufConfigurationService = TestBed.get(WufConfigurationService);
        expect(service).toBeTruthy();
    });
});
