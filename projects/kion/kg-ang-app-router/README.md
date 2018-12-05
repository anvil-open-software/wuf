# Kion Angular App Router

The Kion Angular app router provides easy integration into the layout module and navigation.

## Installation

To install run the following command:

```bash
# Yarn
/project/root/> yarn add @kion/kg-ang-app-router
# Npm
/project/root/> npm install --save @kion/kg-ang-app-router
```

## Usage

This module uses Angular's router under the hood, so any path you specify can use any syntax that the Angular router supports.

### Root

In your main module you must call the static .forRoot() function.

### Defining routes

#### forChild()

You can add a route by calling the AppRoutingModule.forChild({}) in your module. The forChild function takes 1 paremeter of type IRoute.

```typescript

import { IRoute } from '@kion/kg-ang-app-router';

let route: IRoute = {
    implIRoutes: true,
    path: "rootPath",
    label: "Label for navigation",
    childRoutes: [{
        implIChildRoute: true,
        path: "subPath",
        label: "Label for navigation",
        component: MyComponent /* Component Angular will put in the router-outlet. */
    }]
};

@NgModule({
    imports: [ 
        AppRoutingModule.forChild(route)
    ]
})
export class MyModule {
}

```

#### @AppRoute Annotation

There is also an annotation you can add to a class. It takes 1 parameter of type IRoute.

```typescript

import { IRoute, AppRoute } from '@kion/kg-ang-app-router';

let route: IRoute = {
    implIRoutes: true,
    path: "rootPath",
    label: "Label for navigation",
    childRoutes: [{
        implIChildRoute: true,
        path: "subPath",
        label: "Label for navigation",
        component: MyComponent /* Component Angular will put in the router-outlet. */
    }]
};

@AppRoute(route)
export class MyClass {
}

```