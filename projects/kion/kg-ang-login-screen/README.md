Thi component is a generic login screen for use with your angular application.

It works alongside @kion/kg-ang-app-auth to redirect to an external authroization mechanism.

Currently it only supports external authorization such as OAuth.

## Installation

```bash
# Yarn
/root/of/app> yarn add @kion/kg-ang-login-screen
# Npm
/root/of/app> npm install @kion/kg-ang-login-screen
```

### Peer dependencies

- @angular/core
- @angular/router
- @kion/kg-ang-app-auth
- @kion/kg-ang-app-core

## Usage

You can either set this component in your angualar router for the login route.

```typescript

import { LoginScreen } from '@kion/kg-ang-login-screen';

@NgModule({
    RouterModule.forRoot([{
        path: '',
        component: MyMainComponent
    }, {
        path: 'login',
        component: LoginScreen
    }])
})
export class MyMainRouter {
}
```

Or using the '@kion/kg-ang-app-router' you can set it in the 'loginScreenComponent' configuration property.

```typescript

import { LoginScreen } from '@kion/kg-ang-login-screen';
import { AppRoutingModule } from '@kion/kg-ang-app-router';

@NgModule({
    AppRoutingModule.forRoot({
        loginScreenComponent: LoginScreen
    })
})
export class MyMainModule {
}
```