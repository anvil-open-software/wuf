Navigation
=======

A collection of components used for application navigation.

Dependencies
------------
This package has some peer dependencies.  To install these dependencies, run the following commands from your application root:

```bash
npm install @angular/material@6.4.7 material-design-icons@3.0.1 --save
```

or

```bash
yarn add @angular/material@6.4.7 material-design-icons@3.0.1
```

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
