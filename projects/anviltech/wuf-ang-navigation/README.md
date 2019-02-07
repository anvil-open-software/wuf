Navigation
=======

A collection of components used for application navigation.

Installation
------------
Install this package with the following command:

```bash
npm install @anviltech/wuf-ang-navigation --save
```

or

```bash
yarn add @anviltech/wuf-ang-navigation
```

Import this package into your application's `app.module.ts` file:

```typescript
import { WufDashboardModule } from '@anviltech/wuf-ang-navigation';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    WufNavigationModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    WufNavigationModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
