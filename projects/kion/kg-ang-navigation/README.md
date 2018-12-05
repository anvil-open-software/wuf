Navigation
=======

A collection of components used for application navigation.

Installation
------------
Install this package with the following command:

```bash
npm install @kion/kg-ang-navigation --save
```

or

```bash
yarn add @kion/kg-ang-navigation
```

Import this package into your application's `app.module.ts` file:

```typescript
import { KgDashboardModule } from '@kion/kg-ang-navigation';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    KgNavigationModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    KgNavigationModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
