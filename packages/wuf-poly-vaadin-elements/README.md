Vaadin Elements
------------------
This package doesn't provide any packages itself.  Instead, it installs various package dependencies for Vaadin components, including KION-specifc styling overrides.  By installing this package instead of the Vaadin components directy, you are ensuring that your Vaadin component versions have been tested for compatibility with WUF and that style dependencies will be available.  

## Installation

```bash
npm install @anviltech/wuf-poly-vaadin-elements @anviltech/wuf-poly-paper-elements @anviltech/wuf-poly-grid-styles
```

Then add the following lines to your application's `app.module.ts` file:

```typescript
import '@anviltech/wuf-poly-grid-styles';
```
