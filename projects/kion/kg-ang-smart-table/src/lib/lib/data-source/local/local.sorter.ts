/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

export class LocalSorter {

    protected static CompareFunc(direction: any, a: any, b: any) {
        if (a < b) {
            return -1 * direction;
        }
        if (a > b) {
            return direction;
        }
        return 0;
    }

    static sort(data: Array<any>, field: string, direction: string, customCompare?: Function): Array<any> {

        const dir: number = (direction === 'asc') ? 1 : -1;
        const compare: Function = customCompare ? customCompare : LocalSorter.CompareFunc;

        return data.sort((a, b) => {
            return compare.call(null, dir, a[field], b[field]);
        });
    }
}
