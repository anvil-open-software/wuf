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
        {label: 'Default',
            config: {
                theme: 'default',
                copyrightName: 'Default Company',
                navigation: {position: 'left', alignment: 'left', iconPosition: 'left'}
            }
        },
        {label: 'Theme 1',
            config: {
                theme: 'theme1',
                copyrightName: 'Company 1',
                navigation: {position: 'left', alignment: 'left', iconPosition: 'left'}
            }
        },
        {label: 'Theme 2',
            config: {
                theme: 'theme2',
                copyrightName: 'Company 2',
                navigation: {position: 'left', alignment: 'left', iconPosition: 'left'}
            }
        },
        {label: 'Theme 3',
            config: {
                theme: 'theme3',
                copyrightName: 'Company 3',
                navigation: {position: 'left', alignment: 'left', iconPosition: 'left'}
            }
        },
        {label: 'Theme 4',
            config: {
                theme: 'theme4',
                copyrightName: 'Company 4',
                navigation: {position: 'top', alignment: 'left', iconPosition: 'left'}
            }
        },
        {label: 'Theme 5',
            config: {
                theme: 'theme5',
                copyrightName: 'Company 5',
                navigation: {position: 'top', alignment: 'center', iconPosition: 'top'}
            }
        }
    ];
}
