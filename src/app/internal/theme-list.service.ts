/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable } from '@angular/core';


@Injectable()
export class ThemeListService {

    constructor() {
    }

    themes: any = [
        {label: 'Dematic (default)',
            config: {
                theme: 'dematic',
                copyrightName: 'Dematic, Inc.',
                navigation: {position: 'left', alignment: 'left', iconPosition: 'left'}
            }
        },
        {label: 'KION',
            config: {
                theme: 'kion',
                copyrightName: 'KION Group',
                navigation: {position: 'left', alignment: 'left', iconPosition: 'left'}
            }
        },
        {label: 'BMW',
            config: {
                theme: 'bmw',
                copyrightName: 'BMW Group',
                navigation: {position: 'left', alignment: 'left', iconPosition: 'left'}
            }
        },
        {label: 'Walmart',
            config: {
                theme: 'walmart',
                copyrightName: 'Walmart, Inc.',
                navigation: {position: 'left', alignment: 'left', iconPosition: 'left'}
            }
        },
        {label: 'Linde',
            config: {
                theme: 'linde',
                copyrightName: 'Linde, Inc.',
                navigation: {position: 'top', alignment: 'left', iconPosition: 'left'}
            }
        },
        {label: 'STILL',
            config: {
                theme: 'still',
                copyrightName: 'STILL, Inc.',
                navigation: {position: 'top', alignment: 'center', iconPosition: 'top'}
            }
        }
    ];
}
