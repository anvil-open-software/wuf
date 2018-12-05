import { IAuth, AUTH_LOCATION } from './IAuth';
import { IUser } from './IUser';

export class NoAuthProvider implements IAuth {
    public iauthImpl: Boolean = true;
    public authLocation: AUTH_LOCATION = AUTH_LOCATION.INTERNAL;
    public getAuthorizationHeader(): String {
        return '';
    }

    public getAuthorizationValue(): String {
        return '';
    }

    public getTenantId(): String {
        return '';
    }
    public isValid(): boolean {
        return true;
    }
    
    public hasAuthorizationValue(): boolean {
        return true;
    }
    public isAuthorizationValueExpired(): boolean {
        return false;
    }
    
    public getLoginPath(): String {
        throw new Error('No auth provider implementation has no login path.');
    }
    public getLogoutPath(): String {
        throw new Error('No auth provider implementation has no logout path.');
    }
    public getRefreshPath(): String {
        throw new Error('No auth provider implementation has no refresh path.');
    }
    public logout(): void {
        /** No-op, we don't need to logout. */
    }
    public buildUser(): IUser {
        return {
            id: 'guest',
            displayName: 'Guest',
            tenantId: '00000000-0000-0000-0000-000000000000',
            userName: 'guest-user'
        };
    }
}