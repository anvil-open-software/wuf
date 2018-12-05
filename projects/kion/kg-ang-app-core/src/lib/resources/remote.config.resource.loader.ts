/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { ResourceLoadingManager } from './app.resource.loader';


/**
* fetches data from ui-config server instead of flat files
*/
export class RemoteConfigResource {
    private dematicResourcePath: string;
    private tenantResourcePath: string;
    public constructor(apiPath: string, resourcePath: string) {
        this.dematicResourcePath = apiPath + resourcePath;
        const authProvider = ResourceLoadingManager.theCoreAuthProvider();
        if ( authProvider && authProvider.getTenantId() ) {
            this.tenantResourcePath = apiPath + "/tenants/" + authProvider.getTenantId() + resourcePath;
        }
    }

    public getDematicResourcePath(){
        return this.dematicResourcePath;
    }

    public getTenantResourcePath(){
        return this.tenantResourcePath;
    }

}
