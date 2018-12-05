/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { GLOBAL_EVENT_BUS, Event, EventBus } from './lib/events/event.bus';
import { EVENT_TYPES } from './lib/events/event.types';

import { IModule } from './lib/submodule/imodule';

import { AppCoreModule } from './lib/app.core.module';

import { DataSources, DataSource } from './lib/datasources/app.datasources';

import { IResourceLoader, Resource, ResourceLoadingManager } from './lib/resources/app.resource.loader';

import { Initialize } from './lib/app.initializer';

import { IAuth, AUTH_LOCATION } from './lib/authorization/IAuth';
import { IUser } from './lib/authorization/IUser';
import { IEnvironment } from './lib/IEnvironment';

import { CoreHttpService } from './lib/http/core.http.service';

import { AppRootComponent } from './lib/components/app.root.component/app.root.component';
import { IApplicationConfig } from './lib/IApplicationConfig';


export {
    IEnvironment,
    GLOBAL_EVENT_BUS,
    EventBus,
    Event,
    EVENT_TYPES,
    IModule,
    AppCoreModule,
    DataSource,
    DataSources,
    IResourceLoader,
    Resource,
    ResourceLoadingManager,
    Initialize,
    IAuth,
    IApplicationConfig,
    AUTH_LOCATION,
    IUser,
    CoreHttpService,
    AppRootComponent
};
