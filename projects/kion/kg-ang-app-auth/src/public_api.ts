/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/*
 * Public API Surface of kg-ang-app-auth
 */
export { AuthorizationCache, DEMATIC_DATA_SOURCE_NAME } from './lib/app.authorization.cache';
export { IOAuthAuthority, OAuth } from './lib/types/OAuth';
export { KionCloudAuthority } from './lib/authorities/kion-cloud';
export { AuthorizationModule } from './lib/app.authorization.module';
export { AuthorizedHttpService } from './lib/secure-http/authorized.http.service';
