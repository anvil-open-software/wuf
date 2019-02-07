Navigation
=======

A series of table components (grid) for displaying tabular data.

Installation
------------
Install this package with the following command:

```bash
npm install @anviltech/wuf-ang-smart-table --save
```

or

```bash
yarn add @anviltech/wuf-ang-smart-table
```

Import this package into your application's `app.module.ts` file:

```typescript
import { WufTableModule } from '@anviltech/wuf-ang-smart-table';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    WufTableModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    WufTableModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
