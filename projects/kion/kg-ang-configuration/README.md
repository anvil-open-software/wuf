Configuration Services
======================

A service for managing application configurations.

Installation
------------
Install this package with the following command:

```bash
npm install @kion/kg-ang-configuration --save
```

or

```bash
yarn add @kion/kg-ang-configuration
```

Import this package into your application's `app.module.ts` file:

```typescript
import { KgDashboardModule } from '@kion/kg-ang-configuration';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    KgConfigurationModule.forRoot()
]
```

Add to the `providers` section of `app.module.ts`:

```typescript
providers: [
    KgConfigurationService
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    KgConfigurationModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
