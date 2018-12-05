Drawer
=======

A UI widget for a gridster layout.  Based on [Angular Gridster 2](https://github.com/tiberiuzuld/angular-gridster2).

Installation
------------
Install this package with the following command:

```bash
npm install @kion/kg-ang-gridster --save
```

or

```bash
yarn add @kion/kg-ang-gridster material-design-icons @angular/material
```

(Note that material-design-icons and @angular/material are both peer dependencies of this package.)

Import this package into your application's `app.module.ts` file:

```typescript
import { KgGridsterModule } from '@kion/kg-ang-gridster';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    KgGridsterModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    KgGridsterModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
