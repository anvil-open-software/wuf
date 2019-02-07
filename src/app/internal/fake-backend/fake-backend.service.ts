/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { throwError as observableThrowError, of, Observable } from 'rxjs';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';
// The following is used to simulate a backend in a static application without one.
// Read this article for more information: http://jasonwatmore.com/post/2017/12/15/angular-5-mock-backend-example-for-backendless-development

import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';

import { deepMerge } from '@anviltech/wuf-ang-utils';

// Get fake data
import { configuration } from '../configuration/configuration';
import { FakeUser } from './data/user';
import { FooterItems } from './data/footeritems';
import { NavigationItems } from './data/navigation';


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    simulatedDelay = 0; // delay, in milliseconds, used to simulate network latency
    users: any[] = [];
    storageKey: string = configuration.id + '_users';

    constructor() {
        // Get array of users from local storage for registered users
        this.users = JSON.parse(localStorage.getItem(this.storageKey)) || [];

        // If there are no users in local storage, create a default user
        if (!this.users.length) {
            this.createUser(FakeUser);
        }
    }

    createUser(newUser: any) {
        // save new user
        newUser.id = this.users.length + 1;
        this.users.push(newUser);
        localStorage.setItem(this.storageKey, JSON.stringify(this.users));

        // respond 200 OK
        return of(new HttpResponse({status: 200}));
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        /***** USERS *****/

        // wrap in delayed observable to simulate server api call

        return of(null).pipe(
            mergeMap(() => {

                // authenticate
                if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
                    // find if any user matches login credentials
                    let filteredUsers = this.users.filter(user => {
                        return user.username === request.body.username && user.password === request.body.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return 200 OK with user details and fake jwt token
                        let user = filteredUsers[0];
                        let body = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                            // we do not return password
                        };

                        return of(new HttpResponse({status: 200, body: body}));
                    } else {
                        // else return 400 bad request
                        return observableThrowError('Username or password is incorrect');
                    }
                }

                // get all users
                if (request.url.endsWith('/api/users') && request.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        return of(new HttpResponse({status: 200, body: this.users}));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        return observableThrowError('Unauthorised');
                    }
                }

                // get user by id
                if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'GET') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = request.url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = this.users.filter(user => {
                            return user.id === id;
                        });
                        let user = matchedUsers.length ? matchedUsers[0] : null;

                        return of(new HttpResponse({status: 200, body: user}));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        return observableThrowError('Unauthorised');
                    }
                }

                // create user
                if (request.url.endsWith('/api/users') && request.method === 'POST') {
                    // get new user object from post body
                    let newUser = request.body;

                    // validation
                    let duplicateUser = this.users.filter(user => {
                        return user.username === newUser.username;
                    }).length;
                    if (duplicateUser) {
                        return observableThrowError('Username "' + newUser.username + '" is already taken');
                    }

                    return this.createUser(request.body);
                }

                // delete user
                if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'POST') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = request.url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < this.users.length; i++) {
                            let user = this.users[i];
                            if (user.id === id) {
                                // update user
                                user = deepMerge(user, request.body); // merge old data with new data
                                localStorage.setItem(this.storageKey, JSON.stringify(this.users));
                                break;
                            }
                        }

                        // respond 200 OK
                        return of(new HttpResponse({status: 200}));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        return observableThrowError('Unauthorised');
                    }
                }

                // delete user
                if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'DELETE') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = request.url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < this.users.length; i++) {
                            let user = this.users[i];
                            if (user.id === id) {
                                // delete user
                                this.users.splice(i, 1);
                                localStorage.setItem(this.storageKey, JSON.stringify(this.users));
                                break;
                            }
                        }

                        // respond 200 OK
                        return of(new HttpResponse({status: 200}));
                    } else {
                        // return 401 not authorised if token is null or invalid
                        return observableThrowError('Unauthorised');
                    }
                }

                /***** NAVIGATION *****/
                // get navigation items
                if (request.url.endsWith('/api/navigation') && request.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    return of(new HttpResponse({status: 200, body: {data: NavigationItems}}));
                }

                /***** SIDEBAR FOOTER ITEMS *****/
                // get sidebar footer items
                if (request.url.endsWith('/api/footer') && request.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    return of(new HttpResponse({status: 200, body: {data: FooterItems}}));
                }

                /***** PASS THROUGH *****/
                // pass through any requests not handled above
                return next.handle(request);
            }),

            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            materialize(),
            delay(this.simulatedDelay),
            dematerialize()
        );
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
