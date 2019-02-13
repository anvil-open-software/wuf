/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Pipe, PipeTransform } from '@angular/core';


/**
 * @ngdoc pipe
 * @name WufSentenceCasePipe
 *
 * @description
 * Transform to Title Case: uppercase the first letter of the words in a string.
 *
 * @param The word(s) to have their first letters capitalized
 *
 * @author Rodrigo Silveira
 */
@Pipe({name: 'kgSentenceCase'})
export class WufSentenceCasePipe implements PipeTransform {
    transform(value: string, args?: any): any {
        if (value) {
            return value.length === 0 ? '' :
                value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase()));
        }
    }
}
