Configuration Services
======================

A service for managing application configurations.

Installation
------------
Install this package with the following command:

```bash
npm install @anviltech/wuf-ang-configuration --save
```

or

```bash
yarn add @anviltech/wuf-ang-configuration
```

Import this package into your application's `app.module.ts` file:

```typescript
import { WufDashboardModule } from '@anviltech/wuf-ang-configuration';
```

Add to the `imports` section of `app.module.ts`:

```typescript
imports: [
    WufConfigurationModule.forRoot()
]
```

Add to the `providers` section of `app.module.ts`:

```typescript
providers: [
    WufConfigurationService
]
```

When this package is used in any application submodule (not the main `app.module.ts` file), do not include `.forRoot()`:

```typescript
imports: [
    WufConfigurationModule
]
```

Usage
-----

Refer to the Living Style Guide for documentation on usage of this package. 
