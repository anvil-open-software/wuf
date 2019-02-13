Utilities
==========

This package contains a number of helper functions for positioning, event triggers, merging, etc that can be used in an app, component, or tests.

Installation
------------
Install this package with the following command:

```bash
npm install @anviltech/wuf-ang-utils --save
```

or

```bash
yarn add @anviltech/wuf-ang-utils
```

Import this package into your application's `app.module.ts` file:

```typescript
import { WufDashboardModule } from '@anviltech/wuf-ang-utils';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    WufUtilsModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    WufUtilsModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
