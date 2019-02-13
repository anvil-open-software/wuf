Drawer
=======

A UI widget for a Material Design side drawer.

Installation
------------
Install this package with the following command:

```bash
npm install @anviltech/wuf-ang-drawer --save
```

or

```bash
yarn add @anviltech/wuf-ang-drawer
```

Import this package into your application's `app.module.ts` file:

```typescript
import { WufDrawerModule } from '@anviltech/wuf-ang-drawer';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    WufDrawerModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    WufDrawerModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
