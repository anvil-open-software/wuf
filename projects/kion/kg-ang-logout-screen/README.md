Thi component is a generic logout screen for use with your angular application.

It works alongside @kion/kg-ang-app-auth to redirect to an external authroization mechanism.

Currently it only supports external authorization such as OAuth.

## Installation

```bash
# Yarn
/root/of/app> yarn add @kion/kg-ang-logout-screen
# Npm
/root/of/app> npm install @kion/kg-ang-logout-screen
```

### Peer dependencies

- @angular/core
- @angular/router
- @kion/kg-ang-app-auth
- @kion/kg-ang-app-core

## Usage

You can either set this component in your angualar router for the logout route.

```typescript

import { LogoutScreen } from '@kion/kg-ang-logout-screen';

@NgModule({
    RouterModule.forRoot([{
        path: '',
        component: MyMainComponent
    }, {
        path: 'logout',
        component: LogoutScreen
    }])
})
export class MyMainRouter {
}
```

Or using the '@kion/kg-ang-app-router' you can set it in the 'logoutScreenComponent' configuration property.

```typescript

import { LogoutScreen } from '@kion/kg-ang-logout-screen';
import { AppRoutingModule } from '@kion/kg-ang-app-router';

@NgModule({
    AppRoutingModule.forRoot({
        logoutScreenComponent: LogoutScreen
    })
})
export class MyMainModule {
}
```