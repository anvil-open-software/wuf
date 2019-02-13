/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/**
 * Created by silveir on 4/12/17.
 */
declare module jasmine {
    interface Matchers<T> {
        toHaveText(expected: string): boolean;

        toHaveMap(expected: { [k: string]: string }): boolean;

        toHaveCssClass(expected: any): boolean;

        toHaveCssStyle(expected: { [k: string]: string } | string): boolean;
    }
}
