import { enableProdMode } from '@angular/core';
import { IAuth } from './authorization/IAuth';
import { IEnvironment } from './IEnvironment';
import { ResourceLoadingManager } from './resources/app.resource.loader';
import { initializeDatasourceResource } from './datasources/app.datasources';


export function Initialize(environment: IEnvironment,
                           coreAuthProvider: IAuth, 
                           callback?: Function) {

    // Check if there is a token in the url. If there is save it as our token.

    const urlToken = /\??\&?token=([a-zA-Z0-9-_.]*)/.exec(window.location.search);

    if (urlToken !== null) {
        sessionStorage.setItem('cloud-token', urlToken[1]);

        let tokenLessSearch = window.location.search.replace('token=' + urlToken[1], '');

        if (/\?\#/.test(tokenLessSearch) || tokenLessSearch.endsWith('?')) {
            tokenLessSearch = tokenLessSearch.replace('?', '');
        }

        window.history.replaceState(window.history.state, '', window.location.pathname + tokenLessSearch);
    }

    if (environment.production) {
        enableProdMode();
    }

    ResourceLoadingManager.registerCoreAuthProvider(coreAuthProvider);

    initializeDatasourceResource();

    ResourceLoadingManager.loadResources()
    .then(() => {
        if (typeof callback === 'function') {
            callback();
        }
    })
    .catch(error => {
        if (error.message) {
            console.error('Error initializing application: ' + error.message);
        } else {
            console.error('Error initializing application: ' + error);
        }

        if (error.stack) {
            console.error(error.stack);
        }
    });
}
