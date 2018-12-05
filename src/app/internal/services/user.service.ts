// The user service contains a standard set of CRUD methods for managing users.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
    }

    // NOTE: The user routes to the API server should all be protected.  Only admins should have access.
    // Therefore, we are using the authHttp method instead of the usual Http, which will take care of
    // passing the JWT token to the server for us and throw an error if the token doesn't exist.
    // By default, if there is no valid JWT saved, AuthHttp will return an Observable error with 'Invalid JWT'.

    authenticate(user: any) {
        return this.http.post<any>('/api/authenticate', user);
    }

    getAll() {
        return this.http.get<any>('/api/users');
    }

    getById(id: string) {
        return this.http.get<any>('/api/users/' + id);
    }

    create(data: any) {
        return this.http.post<any>('/api/users', data);
    }

    update(data: any) {
        return this.http.put<any>('/api/users/' + data._id, data);
    }

    delete(id: string) {
        return this.http.delete<any>('/api/users/' + id);
    }
}
