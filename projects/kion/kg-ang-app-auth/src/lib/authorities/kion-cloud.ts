import { IOAuthAuthority } from '../types/OAuth';
import { decode } from 'jsonwebtoken';


export class KionCloudAuthority implements IOAuthAuthority {

    private loginWebAppUrl: String = '';
    private token: String | null = null;
    private tokenPayload: Object | null = null;

    public constructor(loginWebAppUrl: String) {
        this.loginWebAppUrl = loginWebAppUrl;
        this.getToken();
    }

    public getLoginUrl(): String {
        return this.loginWebAppUrl + '/secure/login?web_app_url=' + window.location.href;
    }

    public getLogoutUrl(): String {
        return this.loginWebAppUrl + '/secure/logout?web_app_url=' + window.location.href;
    }

    public getRefreshUrl(): String {
        return this.loginWebAppUrl + "/secure/refresh";
    }

    public getToken(): String {
        if (this.token === null) {
            this.token = this.fetchToken();

            if (this.token === null) {
                this.tokenPayload = null;
            } else {
                this.tokenPayload = decode(this.token.toString(), {json: true});
            }
        }

        return this.token;
    }

    private fetchToken(): String {
        const storageToken = sessionStorage.getItem('cloud-token');

        if (storageToken !== null && storageToken !== '') {
            return storageToken;
        }

        return null;
    }

    /**
     * Return true if token valid; has a token with "exp" claim, and is not expired.
     */
    public isTokenValid(): boolean {
        if (this.hasToken()) {
            if (!this.isTokenExpired()) {
                return true;
            }
        }

        return false;
    }

    /**
     * Return true if has a token, and also has token "exp" property. 
     * Otherwise, return false.
     */
    public hasToken(): boolean {
        if (this.token === null) {
            this.getToken();
        }

        if (this.tokenPayload === null) {
            return false;
        }

        try {
            if (this.tokenPayload.hasOwnProperty("exp")) {
                return true;
            }

            return false;
        } catch (err) {
            return false;
        }
    }

    /**
     * Return true if has token and has "exp" claim, and current time is past expiry.
     * Otherwise, return false.
     */
    public isTokenExpired(): boolean {
        if (this.hasToken()) {
            if (this.tokenPayload && this.tokenPayload["exp"] <= Math.round(Date.now()/1000.0)) {
                return true;
            }
        }

        return false;
    }
    
    public clearToken() {
        this.token = null;
        this.tokenPayload = null;
        sessionStorage.removeItem('cloud-token');
    }

    public getIdFromToken(): String {
        if (this.hasToken() && this.tokenPayload !== null && this.tokenPayload.hasOwnProperty('oid')) {
            return this.tokenPayload['oid'];
        } else {
            return '';
        }
    }

    public getTenantIdFromToken(): String {
        if (this.hasToken() && this.tokenPayload !== null && this.tokenPayload.hasOwnProperty('tid')) {
            return this.tokenPayload['tid'];
        } else {
            return '';
        }
    }

    public getUserNameFromToken(): String {
        if (this.hasToken() && this.tokenPayload !== null && this.tokenPayload.hasOwnProperty('upn')) {
            return this.tokenPayload['upn'];
        } else {
            return '';
        }
    }

    public getUserDisplayNameFromToken(): String {
        if (this.hasToken() && this.tokenPayload !== null && this.tokenPayload.hasOwnProperty('name')) {
            return this.tokenPayload['name'];
        } else {
            return this.getUserNameFromToken();
        }
    }
}
