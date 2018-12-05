import { TestBed } from '@angular/core/testing';

import { KgDrawerService } from './drawer.service';


describe('KgDrawerService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: KgDrawerService = TestBed.get(KgDrawerService);
        expect(service).toBeTruthy();
    });
});
