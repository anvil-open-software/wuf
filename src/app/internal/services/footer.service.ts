import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class FooterService {

    constructor(private http: HttpClient) {
    }

    get() {
        return this.http.get<any>('/api/footer');
    }
}
