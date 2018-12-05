This screen is a wrapper for the 'kg-view-main' and 'sidebarNavigation' components of the kg-angular-library.

What it adds is extensions into kg-ang-app-router and kg-ang-app-auth components. This screen will read your routes and dynamically generate the navigation, as well it will read the base authorization set in the auth cache and display the user information in the top corner.

## Peer Dependencies - Add to your package.json

- @kion/kg-ang-app-core
- @kion/kg-ang-app-auth
- @kion/kg-ang-app-router

### Dependencies - Automaticlly resolved

- @kion/kg-angular-library

## Usage

In your main app.module.ts.

```typescript
import { MainLayoutScreen } from '@kion/kg-ang-main-layout-screen';
import { AppRoutingModule } from '@kion/kg-ang-app-routern';

@NgModule({
    imports: [
        AppRoutingModule.forRoot({
            mainViewComponent: MainLayoutScreen
        })
    ],
    declarations: [ MainLayoutScreen ]
}
export class AppModule {}
```