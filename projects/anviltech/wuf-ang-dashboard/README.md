Dashboard
=========

A dashboard component that includes layout and left-side KPI indicators.

Installation
------------
Install this package with the following command:

```bash
npm install @anviltech/wuf-ang-dashboard --save
```

or

```bash
yarn add @anviltech/wuf-ang-dashboard
```

Import this package into your application's `app.module.ts` file:

```typescript
import { WufDashboardModule } from '@anviltech/wuf-ang-dashboard';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    WufDashboardModule.forRoot()
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    WufDashboardModule
]
```
