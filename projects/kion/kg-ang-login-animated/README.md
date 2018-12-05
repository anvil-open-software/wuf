Layout
===============

A fancy, animated login screen.

Installation
------------
Install this package with the following command:

```bash
npm install @kion/kg-ang-login-animated --save
```

or

```bash
yarn add @kion/kg-ang-login-animated
```

Import this package into your application's `app.module.ts` file:

```typescript
import { KgDashboardModule } from '@kion/kg-ang-login-animated';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    KgLogindModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    KgLogindModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
