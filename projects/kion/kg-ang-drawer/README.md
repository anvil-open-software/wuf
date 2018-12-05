Drawer
=======

A UI widget for a Material Design side drawer.

Installation
------------
Install this package with the following command:

```bash
npm install @kion/kg-ang-drawer --save
```

or

```bash
yarn add @kion/kg-ang-drawer
```

Import this package into your application's `app.module.ts` file:

```typescript
import { KgDrawerModule } from '@kion/kg-ang-drawer';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    KgDrawerModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    KgDrawerModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
