Dashboard
=========

A dashboard component that includes layout and left-side KPI indicators.

Installation
------------
Install this package with the following command:

```bash
npm install @kion/kg-ang-dashboard --save
```

or

```bash
yarn add @kion/kg-ang-dashboard
```

Import this package into your application's `app.module.ts` file:

```typescript
import { KgDashboardModule } from '@kion/kg-ang-dashboard';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    KgDashboardModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    KgDashboardModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
