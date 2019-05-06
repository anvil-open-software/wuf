Layout
===============

A fancy, animated login screen.

Installation
------------
Install this package with the following command:

```bash
npm install @anviltech/wuf-ang-login-animated --save
```

or

```bash
yarn add @anviltech/wuf-ang-login-animated
```

Import this package into your application's `app.module.ts` file:

```typescript
import { WufDashboardModule } from '@anviltech/wuf-ang-login-animated';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    WufLogindModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    WufLogindModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
