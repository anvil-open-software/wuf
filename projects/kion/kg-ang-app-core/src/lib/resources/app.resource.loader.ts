/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import * as $ from 'jquery';

import { IAuth } from '../authorization/IAuth';
import { NoAuthProvider } from '../authorization/NoAuthProvider';


export class Resource {

    private resourceUrl: String;
    private loadingPromise: Promise<String>;
    public resourceData: any = null;

    public constructor(resourceUrl: String) {
        this.resourceUrl = resourceUrl;
    }

    public loadData(): Promise<String> {
        return new Promise<String>((function (resolve: Function, reject: Function) {
            $.ajax({
                url: this.resourceUrl,
                success: data => {
                    this.resourceData = data;
                    resolve();
                },
                error: jqXhr => {
                    this.resourceData = null;
                    reject(jqXhr.responseText);
                }
            });
        }).bind(this));
    }
}

export interface IResourceLoader {
    loadingPromise: Promise<String>;
}

export class ResourceLoadingManager {
    private static loaderPromises: Promise<String>[] = [];
    private static coreAuthProvider: IAuth = new NoAuthProvider();

    static registerCoreAuthProvider(coreAuthProvider: IAuth): void {
        ResourceLoadingManager.coreAuthProvider = coreAuthProvider;
    }

    static theCoreAuthProvider(): IAuth {
        return ResourceLoadingManager.coreAuthProvider;
    }

    static registerLoaderResource(resourceLoader: IResourceLoader): void {
        ResourceLoadingManager.loaderPromises.push(resourceLoader.loadingPromise);
    }

    static loadResources(): Promise<String[]> {
        return Promise.all(ResourceLoadingManager.loaderPromises);
    }
}
