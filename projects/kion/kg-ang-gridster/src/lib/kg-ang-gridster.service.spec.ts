import { TestBed } from '@angular/core/testing';

import { KgGridsterService } from './kg-ang-gridster.service';


describe('KgGridsterService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: KgGridsterService = TestBed.get(KgGridsterService);
        expect(service).toBeTruthy();
    });
});
