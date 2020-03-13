/*
* Copyright (c) 2018 Dematic, Corp.
* Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
*/

export const DynamicFormItems = {
    blacklist: ['id', 'uri'],
    email: {
        type: 'input',
        inputType: 'email',
        hint: 'Enter a valid email address',
        validators: ['required', 'email']
    },
    password: {
        type: 'input',
        inputType: 'password',
        validators: ['required']
    },
    postalCode: {
        type: 'input',
        inputType: 'text',
        validators: ['required'],
        classNames: 'postalCode'
    },
    state : {
        type: 'select',
        value: '',
        options: [
            {
                value: 'ca',
                label: 'CA'
            },
            {
                value: 'dc',
                label: 'DC'
            },
            {
                value: 'wa',
                label: 'WA'
            }
        ],
        validators: ['required']
    },
    country : {
        type: 'select',
        value: 'us',
        options: [
            {
                value: 'china',
                label: 'China'
            },
            {
                value: 'uk',
                label: 'UK'
            },
            {
                value: 'us',
                label: 'US'
            }
        ],
        validators: ['required']
    },
    default: {
        type: 'input',
        inputType: 'text',
        validators: ['required']
    }
};
