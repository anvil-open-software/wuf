Utilities
==========

This package contains a number of helper functions for positioning, event triggers, merging, etc that can be used in an app, component, or tests.

Installation
------------
Install this package with the following command:

```bash
npm install @kion/kg-ang-utils --save
```

or

```bash
yarn add @kion/kg-ang-utils
```

Import this package into your application's `app.module.ts` file:

```typescript
import { KgDashboardModule } from '@kion/kg-ang-utils';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    KgUtilsModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    KgUtilsModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
