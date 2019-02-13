Layout
===============

Layout components and services used for application layout.

Dependencies
------------
This package has some peer dependencies.  To install these dependencies, run the following commands from your application root:

```bash
npm install material-design-icons@3.0.1 --save
```

or

```bash
yarn add material-design-icons@3.0.1
```

Installation
------------
Install this package with the following command:

```bash
npm install @anviltech/wuf-ang-layout --save
```

or

```bash
yarn add @anviltech/wuf-ang-layout
```

Import this package into your application's `app.module.ts` file:

```typescript
import { WufDashboardModule } from '@anviltech/wuf-ang-layout';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    WufLayoutModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    WufLayoutModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
