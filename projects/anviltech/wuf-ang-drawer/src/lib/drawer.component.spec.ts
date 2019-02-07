/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WufDrawerComponent } from './drawer.component';

describe('WufDrawerComponent', () => {
  let component: WufDrawerComponent;
  let fixture: ComponentFixture<WufDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WufDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WufDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
