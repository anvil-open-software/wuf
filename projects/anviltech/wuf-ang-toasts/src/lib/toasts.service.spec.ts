/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { TestBed } from '@angular/core/testing';

import { WufToastsService } from './toasts.service';

describe('WufToastsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WufToastsService = TestBed.get(WufToastsService);
    expect(service).toBeTruthy();
  });
});
