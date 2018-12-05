/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { EVENT_NS_SPLITTER } from './event.bus';


export const EVENT_TYPES = {
    AUTH: 'auth',
    AUTH_LOGIN: 'auth' + EVENT_NS_SPLITTER + 'login',
    AUTH_LOGIN_FAIL: 'auth' + EVENT_NS_SPLITTER + 'login' + EVENT_NS_SPLITTER + 'fail',
    AUTH_LOGIN_FAIL_USER: 'auth' + EVENT_NS_SPLITTER + 'login' + EVENT_NS_SPLITTER + 'fail' + EVENT_NS_SPLITTER + 'user',
    AUTH_LOGIN_SUCCESS: 'auth' + EVENT_NS_SPLITTER + 'login' + EVENT_NS_SPLITTER + 'success',
    AUTH_LOGIN_SUCCESS_USER: 'auth' + EVENT_NS_SPLITTER + 'login' + EVENT_NS_SPLITTER + 'success' + EVENT_NS_SPLITTER + 'user',
    AUTH_LOGIN_SUCCESS_TOKEN: 'auth' + EVENT_NS_SPLITTER + 'login' + EVENT_NS_SPLITTER + 'success' + EVENT_NS_SPLITTER + 'token',
    AUTH_LOGOUT: 'auth' + EVENT_NS_SPLITTER + 'logout',
    AUTH_LOGOUT_INVALID_TOKEN: 'auth' + EVENT_NS_SPLITTER + 'logout' + EVENT_NS_SPLITTER + 'invalidToken',
    AUTH_LOGOUT_USER: 'auth' + EVENT_NS_SPLITTER + 'logout' + EVENT_NS_SPLITTER + 'user',
    AUTH_LOGOUT_TIMEOUT: 'auth' + EVENT_NS_SPLITTER + 'logout' + EVENT_NS_SPLITTER + 'timeout',
    AUTH_AUTHENTICATE: 'auth' + EVENT_NS_SPLITTER + 'authenticate',
    AUTH_REFRESH: 'auth' + EVENT_NS_SPLITTER + 'refresh',
    PERMISSIONS_CHANGED: 'permissions:changed',
    ROUTE: 'route'
};

export class DummyClass {
}
