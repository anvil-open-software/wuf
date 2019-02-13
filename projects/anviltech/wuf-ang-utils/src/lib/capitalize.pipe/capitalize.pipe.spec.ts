/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { WufSentenceCasePipe } from './capitalize.pipe';


describe('WufSentenceCasePipe', () => {
    // This pipe is a pure, stateless function so no need for BeforeEach
    let pipe = new WufSentenceCasePipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });
    it('transforms "abc" to "Abc"', () => {
        expect(pipe.transform('abc')).toBe('Abc');
    });
    it('transforms "Abc" to "Abc"', () => {
        expect(pipe.transform('Abc')).toBe('Abc');
    });
    it('transforms "123" to "123"', () => {
        expect(pipe.transform('123')).toBe('123');
    });
    it('transforms "abc def" to "Abc Def"', () => {
        expect(pipe.transform('abc def')).toBe('Abc Def');
    });
    it('transforms "aBc" to "Abc"', () => {
        expect(pipe.transform('aBc')).toBe('Abc');
    });
});
