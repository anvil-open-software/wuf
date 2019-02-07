Drawer
=======

A UI widget for a gridster layout.  Based on [Angular Gridster 2](https://github.com/tiberiuzuld/angular-gridster2).

Installation
------------
Install this package with the following command:

```bash
npm install @anviltech/wuf-ang-gridster --save
```

or

```bash
yarn add @anviltech/wuf-ang-gridster material-design-icons @angular/material
```

(Note that material-design-icons and @angular/material are both peer dependencies of this package.)

Import this package into your application's `app.module.ts` file:

```typescript
import { WufGridsterModule } from '@anviltech/wuf-ang-gridster';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    WufGridsterModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    WufGridsterModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
