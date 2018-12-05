/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

export class LocalFilter {

    protected static FilterFunc(value: string, search: string) {
        return value.toString().toLowerCase().includes(search.toString().toLowerCase());
    }

    static filter(data: Array<any>, field: string, search: string, customFilter?: Function): Array<any> {
        const filter: Function = customFilter ? customFilter : LocalFilter.FilterFunc;

        return data.filter((el) => {
            const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
            return filter.call(null, value, search);
        });
    }
}
