import { IAuth, AUTH_LOCATION } from '@kion/kg-ang-app-core';
import { IUser } from '@kion/kg-ang-app-core';


export interface IOAuthAuthority {
    getToken(): String;

    isTokenValid(): boolean;
    hasToken(): boolean;
    isTokenExpired(): boolean;

    getLoginUrl(): String;

    getLogoutUrl(): String;

    getRefreshUrl(): String;

    clearToken(): void;

    getTenantIdFromToken(): String;

    getIdFromToken(): String;

    getUserNameFromToken(): String;

    getUserDisplayNameFromToken(): String;
}

export class OAuth implements IAuth {
    public authLocation: AUTH_LOCATION = AUTH_LOCATION.EXTERNAL;

    private authority: IOAuthAuthority;

    public iauthImpl: boolean = true;

    constructor(authority: IOAuthAuthority) {
        this.authority = authority;
    }

    public getAuthorizationHeader(): String {
        return 'Bearer ' + this.getAuthorizationValue();
    }

    public getAuthorizationValue(): String {
        return this.authority.getToken();
    }

    public hasAuthorizationValue(): boolean {
        return this.authority.hasToken();
    }
    
    public isAuthorizationValueExpired(): boolean {
        return this.authority.isTokenExpired();
    }

    public getTenantId(): String {
        return this.authority.getTenantIdFromToken();
    }

    public isValid(): boolean {
        return this.authority.isTokenValid();
    }

    public getLoginPath(): String {
        return this.authority.getLoginUrl();
    }

    public getLogoutPath(): String {
        return this.authority.getLogoutUrl();
    }

    public getRefreshPath(): String {
        return this.authority.getRefreshUrl();
    }

    public logout() {
        this.authority.clearToken();
    }

    public buildUser(): IUser {
        return {
            id: this.authority.getIdFromToken(),
            tenantId: this.authority.getTenantIdFromToken(),
            userName: this.authority.getUserNameFromToken(),
            displayName: this.authority.getUserDisplayNameFromToken()
        };
    }
}
