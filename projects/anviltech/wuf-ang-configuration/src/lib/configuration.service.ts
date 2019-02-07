/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { deepMerge } from '@anviltech/wuf-ang-utils';

export interface NavigationConfig {
    position?: string;
    iconPosition?: string;
    alignment?: string;
}

export interface WufConfiguration {
    id?: string;
    copyrightName?: string;
    navigation?: NavigationConfig;
    theme?: string;
    themeDark?: boolean;
    sidebarSize?: number;
    user?: any;

    [propName: string]: any; // This "index signature" allows the interface to accept any additional unexpected properties without throwing an error.
}

@Injectable({
    providedIn: 'root'
})
export class WufConfigurationService implements OnInit {

    // Define default values for Configuration
    private _config: WufConfiguration = {
        id: 'wuf-application',
        copyrightName: '',
        navigation: {
            position: 'left',
            iconPosition: 'left',
            alignment: 'left'
        },
        theme: 'dematic',
        themeDark: false,
        sidebarSize: 230,
        user: {
            id: 'default'
        }
    };

    private configSubject = new BehaviorSubject(this._config);

    constructor() {
    }

    ngOnInit() {
    }

    get config(): WufConfiguration {
        return this._config;
    }

    /**
     Setting config only applies new or updated properties from the new config into the old config using a merge.
     This is safer than simply replacing the config with whatever is passed in since this will ensure some important
     default values (like app id) are always present.  This also allows us to pass in incomplete config objects.
     */
    set config(newConfig: WufConfiguration) {
        this._config = deepMerge(this._config, newConfig);

        const key = this.getStorageKey();
        this.broadCastConfigChange(this._config);
        this._saveConfig(this._config, key);
    }

    getStorageKey(appId?: string, userId?: string) {
        const myAppId = appId ? appId : this._config.id;
        const myUserId = userId ? userId : this._config.user.id;

        // Get a unique storage key for the current configuration based on App id and User id
        return myAppId + '_' + myUserId;
    }

    broadCastConfigChange(newConfig: WufConfiguration) {
        // Broadcast that a config property has been updated with a new value
        this.configSubject.next(newConfig);
    }

    onConfigChange(): Observable<WufConfiguration> {
        // Allow other components to subscribe to config change events
        return this.configSubject.asObservable();
    }

    getStoredConfig(storageKey?: string) {
        // If we have a config stored in local storage, restore it
        const key = storageKey ? storageKey : this.getStorageKey();

        return this._getStoredConfig(key);
    }

    private _getStoredConfig(storageKey?: string) {
        let myConfig: any = null;
        const key = storageKey ? storageKey : this.getStorageKey();

        try {
            // Fetch stored config from localStorage
            const configStr = localStorage.getItem(key);
            if (configStr != null) {
                myConfig = JSON.parse(configStr);
                return myConfig;
            } else return {};
        } catch (err) {
            console.warn('Could not get stored configuration. Error: ' + err);
            return {};
        }
    }

    private _saveConfig(myConfig: WufConfiguration, storageKey?: string) {
        const key = storageKey ? storageKey : this.getStorageKey();

        try {
            localStorage.setItem(key, JSON.stringify(myConfig));
        } catch (err) {
            console.warn('Could not set stored configuration. Error: ' + err);
        }
    }
}
