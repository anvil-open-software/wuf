/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Resource, ResourceLoadingManager } from '../resources/app.resource.loader';
import { ConfigResourceBuilderPattern } from '../resources/app.config.resource.loader';

import * as $ from 'jquery';
import { ObjectUtils } from '../utils/objectUtils';
import { RemoteConfigResource } from '../resources/remote.config.resource.loader';


// tslint:disable-next-line:prefer-const
let dataSourceTokenInitializer: JQueryDeferred<void>;

const extendableFunctions = {
    getAuthorizationScheme: function (): String {
        if (this.hasOwnProperty('authorizationScheme')) {
            return this.authorizationScheme;
        } else {
            return '';
        }
    },
    getBaseUrl: function (): String {
        return this.baseUrl;
    },
    getBaseApiUrl: function (): String {
        return this.populateUrlVariables(this.getBaseUrl() + this.baseApiPath);
    },
    getExtendedUiUrl: function (): String {
        return this.populateUrlVariables(this.getBaseUrl() + this.baseExternalUiPath);
    },
    populateUrlVariables: function (url: String): String {
        return url;
        // .replace('{tenantId}', tenant.getTenantId())
        // .replace('{token}', authentication.getToken());
    }
};

export interface DataSource {
    type?: String;
    baseUrl?: String;
    baseApiPath?: String;
    baseExternalUiPath?: String;
    authorizationScheme?: String;

    getAuthorizationScheme(): String;

    getBaseUrl(): String;

    getBaseApiUrl(): String;

    getExtendedUiUrl(): String;

    populateUrlVariables(url: String): String;
}

let dataSources: ConfigResourceBuilderPattern.ConfigResource<DataSource[]>;

export const initializeDatasourceResource = function (apiPath?: string, resourcePath?: string) {
    if((apiPath == null || apiPath == undefined) || (resourcePath == null || resourcePath == undefined)){
        dataSources = new ConfigResourceBuilderPattern.ConfigResourceBuilder<DataSource[]>()
        .setCombineTenant(true)
        .setConfigUri('/ui/datasources.json')
        .build();
    }else{
        dataSources = new ConfigResourceBuilderPattern.ConfigResourceBuilder<DataSource[]>()
        .setCombineTenant(true)
        .setRemoteConfigResource(new RemoteConfigResource(apiPath, resourcePath))
        .build();
    }
    ResourceLoadingManager.registerLoaderResource({
        loadingPromise: dataSources.loadData()
    });
};


export class DataSources {
    public static onDatasourceResourceChanged() {
        let datasourcesWithTokenResource: DataSources[];
        const loadedTokenResourcePromises: JQueryDeferred<void>[] = [];

        datasourcesWithTokenResource = this.getDatasourcesWithTokenResource();

        datasourcesWithTokenResource.forEach(function (datasourceWithTokenResource) {
            const loadedTokenResourcePromise: JQueryDeferred<void> = $.Deferred();
            loadedTokenResourcePromises.push(loadedTokenResourcePromise);

            // authentication.getToken(datasourceWithTokenResource.tokenResource, loadedTokenResourcePromise);
        }, this);

        $.when(loadedTokenResourcePromises).always(function () {
            if (dataSourceTokenInitializer) {
                dataSourceTokenInitializer.resolve();
            }
            // eventBuses.GLOBAL_EVENT_BUS.publish(eventBuses.EVENTS.DATASOURCES.CHANGED);
        });
    }

    public static getDatasource(name: string, recurseDatasources?: any): DataSource | null {
        const tmpDataSources = recurseDatasources || dataSources.resourceData || {};
        if (tmpDataSources.hasOwnProperty(name)) {
            if ($.type(tmpDataSources[name]) === 'string') {
                return this.getDatasource(tmpDataSources[name], tmpDataSources);
            } else if ($.type(tmpDataSources[name]) === 'object') {
                return ObjectUtils.extend(tmpDataSources[name], extendableFunctions);
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    public static getDatasourcesWithTokenResource(): DataSource[] {
        const datasourcesWithTokenResource: DataSource[] = [];

        if (dataSources && dataSources.resourceData) {
            dataSources.resourceData.forEach(function (datasourceValue: DataSource, datasourceName) {
                if (datasourceValue.hasOwnProperty('tokenResource')) {
                    datasourcesWithTokenResource.push(datasourceValue);
                }
            });
        }

        return datasourcesWithTokenResource;
    }
}
