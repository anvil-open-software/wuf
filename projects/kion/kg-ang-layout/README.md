Layout
===============

Layout components and services used for application layout.

Installation
------------
Install this package with the following command:

```bash
npm install @kion/kg-ang-layout --save
```

or

```bash
yarn add @kion/kg-ang-layout
```

Import this package into your application's `app.module.ts` file:

```typescript
import { KgDashboardModule } from '@kion/kg-ang-layout';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    KgLayoutModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    KgLayoutModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
