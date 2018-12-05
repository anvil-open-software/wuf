import { TestBed } from '@angular/core/testing';

import { KgAngToastsService } from './kg-ang-toasts.service';

describe('KgAngToastsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KgAngToastsService = TestBed.get(KgAngToastsService);
    expect(service).toBeTruthy();
  });
});
