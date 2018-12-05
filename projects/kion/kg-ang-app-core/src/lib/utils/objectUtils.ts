/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

export class ObjectUtils {
    public static extend(target: any, source: any): any {
        for (const ownProperty in source) {
            // Only copy own properties.
            if (source.hasOwnProperty(ownProperty)) {
                target[ownProperty] = source[ownProperty];
            }
        }

        return target;
    }
}
