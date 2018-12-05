# Changelog
Keeps track of changes made to the base building and packaging of the common components. Each package keeps their own [changelog.md](http://keepachangelog.com/en/1.0.0/) file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2018-10-18
### Changed
- Moving kg-dashboard component out of kg-ang-library and into its own package.
- Moving kg-login component out of kg-ang-library and into its own package.
- Moving kg-navigation component of our kg-ang-library and into its own package.
#### BREAKING CHANGES
- All remaining components in kg-ang-library (i.e., kg-single-input, kg-multi-select, kg-message) are considered DEPRECATED.  For kg-single-input & kg-multi-select, use Angular Material input components.  For kg-message, use kg-web-message

## [2.0.1] - 2018-10-02
### Fixed
- Fixed bug where navigation wasn't updated with correct value during ngOnChanges().

## [2.0.0] - 2018-10-09
### Changed
- Finalizing release candidate

## [6.0.0-rc.4] - 2018-10-04
### Fixed
- Fix issue where minimized nested navigation shows scrollbars

## [6.0.0-rc.3] - 2018-10-04
### Fixed
- Published package still not publishing entire ./dist folder.  Re-publishing.

## [6.0.0-rc.2] - 2018-10-04
### Fixed
- Published package was corrupted.  Re-publishing.

## [6.0.0-rc.1] - 2018-09-27
### Changed
- Dashboard now supports a minimum number of KPIs.  If the minimum threshold is not met, the filler KPIs will be added.
- A fresh start with a version jump for the Angular 6 version of kg-library-angular.  Now renamed "@kion/kg-ang-library" to correspond with our enforced naming convention.
#### BREAKING CHANGES
- We've dropped Smart Table from the library in favor of Vaadin grid.  Remove all references to the KgSmartTable component and associated services from your app and replace with Vaadin Grid.
- All assets (SCSS, CSS, fonts, images, etc) have been moved from kg-ang-library into their own package `@kion/kg-web-assets`.  `@kion/kg-web-assets` is now a dependency of `@kion/kg-ang-library`.
- All layout elements (<kg-view-main>, <kg-content-header>, <kg-content-header> etc) have been moved from kg-ang-library into their own package `@kion/kg-ang-layout`.  `@kion/kg-ang-layout` is now a dependency of `@kion/kg-ang-library`.
- The configuration services have been moved from kg-ang-library into their own package `@kion/kg-ang-configuration`.  `@kion/kg-ang-configuration` is now a dependency of `@kion/kg-ang-library`.
- All utility functions have been moved from kg-ang-library into their own package `@kion/kg-ang-utils`.  `@kion/kg-ang-utils` is now a dependency of `@kion/kg-ang-library`.
- The following packages have been renamed:
    - @kion/kg-library-angular --> @kion/kg-ang-library
    - @kion/kg-grid --> @kion/kg-poly-grid-styles
    - @kion/paper-elements --> @kion/kg-poly-paper-elements
    - @kion/vaadin-elements --> @kion/kg-poly-vaadin-elements
    - @kion/kg-code-sample --> @kion/kg-web-code-sample


=========================================================
The following history is from @kion/kg-library-angular:
=========================================================


## [4.6.1] - 2018-09-24
### Fixed
- Fixed bug where sidebar doesn't scroll on Firefox
- Fixed bug where sidebar subnav items might not all be visible when there are a large number

## [4.6.0] - 2018-09-16
### Added
- Add fancy login component with cool animation designed by Craig
- Add base paper theme styles
- Improve dark theming for Material buttons & Material inputs
### Changed
- Main header now uses absolute positioning so that it can slide down when using login animation
### Fixed
- Making sure --kg-logo-url is available in default theme.
- Ensure mat-core() is only included once

## [4.5.0] - 2018-09-09
### Changed
- Improve scrollbar CSS
### Added
- Add a dashboard component
- Add dark theme styles for dashboard

## [4.4.0] - 2018-08-31
### Changed
- Scrolling areas scrollbars are now decorated via CSS custom properties so that they can be skinned with dark theme.
#### BREAKING
- If passing a dataUrl to kgSidebarService and KgNavigationComponent, the returned JSON object from that URL must include a 'data' property at the top level (e.g., { data: links: [...] } )

## [4.3.0] - 2018-08-24
### Changed
- Sidebar resizing values are now stored in the KgConfigurationService instead of in their own local storage key.
### Fixed
- Fixed sidebar navigation icon size when minimized.

## [4.2.0] - 2018-08-22
### Added
- Added a dark theme mechanism.  A dark theme can now be applied on top of any other theme by adding kg-theme-dark="true" to the root element.  See the Living Style Guide for examples.
### Changed
- KgConfigurationService now uses BehaviorSubject instead of Subject in order to mitigate subscriptions from an application happening after a config update broadcast.  Subscriptions will now receive the latest config even if subscribing after the broadcast.

## [4.1.0] - 2018-08-17
### Added
- Configuration navigation.iconPosition='top' now aligns icons in navigation relative to navigation text label
- Configuration navigation.alignment can be used to align navigation items when position = top
- Copyright name is now a configuration option
- New CSS custom properties for navigation item font and icon size.
### Fixed
- Sub navigation items were not using the correct CSS custom properties when in position top.

## [4.0.0] - 2018-08-15
### Added
- Adding config and layout services
- Adding a position-top layout to <kg-navigation-link> component
- New config service replaces KgThemeService, which has been removed.
- New KgConfigurationService stores/retrieves a config from local storage
- New KgConfigurationService now handles the application and retrieval of themes.
- New KgConfigurationService is used to apply different layouts for navigation (top or left)
### Fixed
Do not display the header's hamburger toggle if the navigation is in top position.
### Changed
- Removed unused PopupService
#### BREAKING
- New config service replaces KgThemeService, which has been removed.  Applications should now use the KgConfigurationService to modify application configuration and store configurations in local storage.  The KgThemeService was using Renderer2 to modify the DOM, which is bad practice.  Instead, the application should modify its own DOM to, for example, set a kg-theme property on the :root element, which was something the KgThemeService was doing previously. 

## [3.2.2] - 2018-08-06
### Fixed
- Fixed issue with KgThemeService where Renderer2 was not initialized on service creation.

## [3.2.1] - 2018-08-02
### Fixed
- Fixed issue with KgThemeService where Karma testing requires passing in a local instance of Renderer2

## [3.2.0] - 2018-07-30
### Added
- Exposing direct show/hide methods for sidebar

## [3.1.1] - 2018-07-29
### Fixed
- Sidebar footer now uses var(--kg-footer-height), as expected.  Content is vertically centered.

## [3.1.0] - 2018-07-19
### Changed
- Improved method for generating themes.  kg-theme-colors() method now also generates Material Design theme.  No longer necessary to call kg-mat-theme() separately.
- Update to angular@5.2.11
- kg-mat-theme() method now generates Material Design (MDC) CSS custom properties in addition to the existing CSS custom properties used by Angular Material.
### Added
- New method for setting button border radius, kg-theme-button-radius()
- New method for creating logo CSS custom properties: kg-theme-logo()

## [3.0.1] - 2018-07-11
### Fixed
- Ensure that scrolling is possible when using basic layout.  Previously, scrollbars would not appear.
### Changed
- Move the sort icon closer to the column header for smart table

## [3.0.0] - 2018-06-28
### Fixed
- Adding z-index:1 to content footer so it properly overlap page content
- Fixed "Filter..." text not displaying by default in Smart Table filter header
- Smart Table: fixed bug where <td> was missing at beginning of row while adding a new item in multi-select mode
- Fix sidebar collapse animation
- Fix sidebar resizing issue where collapsing/expanding followed by dragging sets sidebar to unexpected width.
- Fix issue where <kg-breadcrumb> would not display content passed via content projection.
- Fix issue where side bar content passed via content projection was not being styled correctly.
### Added
- A new css collection providing responsive grid functionality without any other styles is now available.  To use, add `@import '~@kion/kg-library-angular/src/assets/styles/grid';` to your styles.scss file.  This collection may help now that Bootstrap has been removed as a dependency (see below) 
- Similarly, added a new css collection for providing breakpoints via `@import '~@kion/kg-library-angular/src/assets/styles/breakpoints';`
- Similarly, added a new css collection for exposing KION Group's Material Theme via `@import '~@kion/kg-library-angular/src/assets/styles/material-theme';`
- New service to change brand name on the fly by adding class to <body> tag
- Custom branding mechanism now includes Material Design theming overrides from consuming app.
### Changed
- Hide logo on small layouts.  This ensures there is sufficient room for the application name and app-level utility links on small screens.
- Organizational improvements for scss theming
- Exposing scss theming mixins for use in consuming applications
- Removing Bootstrap as a dependency of common-components
- SCSS partials have been consolidated as much as possible.  Wherever possible, component-specific SCSS has been moved into its specific component.
- Replacing an ng-bootstrap (ngb) elements with their Angular Material equivalents (e.g., buttons and tooltips)
#### BREAKING
- In an effort to fully embrace Material Design, Bootstrap is no longer a dependency of common-components and has been removed.  Many convenience classnames have been copied over into common-components like those used for responsive grids.  However, it is highly recommended to remove Bootstrap SCSS, the corresponding @ng-bootstrap/ng-bootstrap depencency, and any Bootstrap classes (e.g., ".btn") you have been using in your consuming apps.  If you find that your app has significantly changed as a result of Bootstrap's extraction, you an manually import Bootstrap in your application.  If you do so, however, you may find that many elements will take on Bootstrap's default styling and you will not be able to apply WUF's theming paradigm.
- Any app that imported SCSS from kg-library-angular and used SCSS variables declared there may find that such variables no longer exist.  This issue would be exposed during an Agular build.  We recommend converting any such SCSS variable to its corresponding CSS custom property.  A list of available CSS custom properites can be found in the Living Style Guide under the "Branding" section.
- For readability, the CSS vars named with the --kg-header (e.g., --kg-header-height) have been renamed to simply --kg-header (e.g., --kg-header-height). Rename your app's SCSS custom props accordingly.
- Be sure you are using Angular Material inputs.  Previous form controls were reliant on Bootstrap styling which is no longer present in the application or kg-library-angular.

## [2.4.1] - 2018-06-19
### Fixed
- The sidebar resizer is no longer displayed when the sidebar is collapsed
- Adding correct foreground color to Material Buttons

## [2.4.0] - 2018-06-15
### Change
- Allow "filter" string in smart table filter header to be overridden with any text

## [2.3.1] - 2018-06-04
### Fixed
- Fix breadcrumb trail and sidebar footer tests

## [2.3.0] - 2018-06-04
### Added
- The breadcrumb trail component now implemented. Takes an array of objects with the following format:
```typescript
[
	{ link: '/',    label: 'Truck Monitoring App' },
	{ link: null,   label: 'Home', active: true }
];
```
- The sidebar footer now displays copyright info by default.  Developer can pass content via content projection which replaces default copyright text.  As before, developer can also pass an array of data or a dataUrl.  If either of the later are passed, links are displayed as footer icons.

## [2.2.0] - 2018-06-04
### Changed
- Made some sidebar icon alignment and spacing improvements.

### Fixed
- Fixed the flash of right-aligned icons when expanding a sub-nav menu item.  Icons now remain left-aligned during expand animation.

## [2.1.0] - 2018-05-29
### Changed
- <kg-layout-main> of the consuming application now takes param `logoRoute` in order to specify where to take the user when cliking on the logo.  In order to allow the user to click on the logo, add `logoRoute` to the application's `src/app/internal/layouts/main/main.component.html` page as follows, where `logoRoute` is set to the route to go to when clicking (e.g., '/'):
```typescript
<kg-view-main [logoRoute]="logoRoute">
```

## [2.0.0] - 2018-05-25
### Changed
- Ensuring that all assets can be loaded locally and that no external assets are used.  This allows us to be fully self-contained.  Roboto, for example, is now being loaded locally instead of from Google's CDN (which requires network access).

### Fixed
- Roboto is now being properly defined as the default font

#### BREAKING
- The Roboto font is now being loaded from local assets.  In order to avoid conflicts, delete the following line from your application's index.html:
```typescript
	<!-- google fonts -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
```

Add the `$kg-font-path` variable to the `src/styles/scss/partials/_3rdParty.scss` file, as follows, ensuring that it appears **before** the ~@kion/gk-library-angular import:

```typescript
/***** @kion UI SDK *****/
$kg-font-path: '~@kion/kg-library-angular/src/assets/fonts/roboto';
@import '~@kion/kg-library-angular/src/assets/styles/library';
```
## [1.7.1] - 2018-05-29
### Fixed
- Fixed when page refresh or load in the single mode, the first row will be selected automatically.

## [1.7.0] - 2018-05-23
### Changed
- Change aesthetics of Smart Table component to better match that of Vaadin grid (as per UX Board guidelines)

#### BREAKING
- "--kg-table-cell-padding" custom property has been removed.  Vertical and horizontal padding is now controlled by the two different CSS custom properties "--kg-table-cell-padding-vert" and "--kg-table-cell-padding-horiz"

## [1.6.0] - 2018-05-18
### Added 
- Added sidebar scrollbar colors for webkit-based browsers. Use "--kg-sidebar-scroll-track-bg-color" and "--kg-sidebar-scroll-thumb-bg-color" to override these colors.

### Changed
- Updating header layout/behavior to adhere to specifications from UX Board.  The sidebar navigation now appears BENEATH the header.

#### BREAKING
- CSS custom property "--kg-sidebar-header-bg-color" is no longer used.
- CSS custom property "--kg-sidebar-logo-url" has been renamed to "--kg-logo-url" which means --kg-logo-url can now be used globally.
- CSS custom property "--kg-sidebar-logo-size" has been replaced with the two properties "--kg-sidebar-logo-width" and "--kg-sidebar-logo-height".
- The DOM structure has changed in order to accommodate the new header paradigm.  As a result, any tests that expect previous DOM structure may need to be revisited.

### Fixed
- Fixed sidebar expand/collapse bug in Firefox

## [1.5.0] - 2018-05-10
### Added
- Add UI validation to the Smart Table Create and Edit mode.

## [1.4.2] - 2018-05-09
### Fixed
- Stop sidebar resize drag when user releases mouse OUTSIDE of the window
- Fix scrollbar bug in sidebar on Chrome/Windows.

## [1.4.1] - 2018-05-08
### Fixed
- Restore Kg-modal to the library, now the modal component has both kg-modal and ng-modal-header, but kg-modal has been deprecated.

## [1.4.0] - 2018-05-05
### Changed
- Upgrade to Angular 5.2.10 and Angular-cli 1.7.4

### Fixed
- Fixed issue where scrollbar was appearing in sidebar in Chrome on Windows
- Fixed icon vertical alignment issue in sidebar nav links

## [1.3.1] - 2018-05-01
### Fixed
- Fixed issue with sidebar not resizing properly when switching modules
- Remove unhelpful warnings output from build process
- Fixed $theme-colors maps to work with CSS custom properties again

### Changed
- Sidebar resizer now ignores mouse movement when the mouse has left the browser window

## [1.3.0] - 2018-04-27
### Added
- Add an indeterminate loading animation to Smart Table.  Developer can display this animation while table data is in the process of loading.
### Changed
- Moving to semver-style versioning
#### BREAKING
- @angular/cdk and @angular/material are now dependencies that must be installed in the consuming app.  Run `npm install --save @angular/material @angular/cdk` in the consuming app.

## [1.2.4] - 2018-04-26
### Changed
- Replaced old modal component with ngb modal component
#### BREAKING
- kgModal no longer exists.  Be sure to remove the the <kg-modal> tag from your app.  Instead use https://ng-bootstrap.github.io/#/components/modal/examples.

## [1.2.3] - 2018-04-23
### Fixed
- Fixed issue where mixin/_alert.scss was throwing an exception under some circumstances by sending rgba() to SASS instead of to the browser.

## [1.2.2] - 2018-04-17
### Added
- Alternating row colors can be added to smart-table via "alternatingRowColors" boolean in table settings
- Row hover effect can be added to smart-table via "hover" boolean in table settings
- Table now takes input for table width (defaults to 100% width) via width property in table settings
- Selected rows are highlighted.
- Allow override of table cell padding via CSS custom properties
- Change basic styles for smart table to better match those of Bootstrap

### Changed
- Smart table classnames changed to use "kg" prefixes (eg. ng2-pagination-xxx --> kg-pagination-xxx)

## [1.2.1] - 2018-04-11
### Fixed
- Fixing styles for Bootstrap alerts.

## [1.2.0] - 2018-04-04
### Changed
- `<kg-view-basic>` HTML now includes classnames that better match that of its `<kg-view-main>` counterpart.
- Pages using basic layouts now stretch to 100% width by default.
- New CSS custom properites --kg-page-width, --kg-page-padding, and --kg-page-margin allow overriding of this behavior.
- The content area now supports --kg-content-padding for overriding of page content padding.
#### BREAKING
- Pages using basic layouts (i.e., no header, sidebar, etc) should now be wrapped in `<kg-content-main>`, just like content in those pages using the main layout.  Update page-not-found and forbidden pages accordingly.
- Quickstart-based apps must change src/app/internal/layouts/basic to use the following markup:
``` html
<kg-view-basic>
	<ng-container main>
		<router-outlet></router-outlet>
	</ng-container>
</kg-view-basic>
```
- For Quickstart-based apps, the last route (404 route) in src/app/app-routes.ts must now look like this:
``` typescript
	{ path: '', component: LayoutBasicComponent, children: [
		{ path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
	]}
```

## [1.1.18] - 2018-04-03
### Fixed
- Fixed bug with sidebar where it would not auto-collapse on small screens.

## [1.1.17] - 2018-04-02
### Changed
- Update to use Bootstrap v1.10.4
### Fixed
- Fix some tests after switch to HttpClient and sidebar changes

## [1.1.16]
### Fixed
- Fix issue where colors are not displaying due to change in libsass.  CSS custom properties using SCSS variables must use #{$myvar} syntax for values.

To implement this fix on any app based on the Quickstart App, perform the following steps:
1. Delete the local .npmrc file at the root of the app.
2. Update package.json to use @kion/kg-library-angular  @1.1.16
3. Run “npm install”
4. Replace src/assets/dumydata/branding.scss with this file: https://gitlab.dematic.com/cloud_visualization_services/living-style-guide/blob/dev/DLABS-1931-stylesBug/src/assets/dummydata/branding.scss
5. Replace src/assets/styles/scss/partials/_custom-properties.scss with this file: https://gitlab.dematic.com/cloud_visualization_services/living-style-guide/blob/dev/DLABS-1931-stylesBug/src/assets/styles/scss/partials/_custom-properties.scss
6. Restart ng server by executing “npm run start"

## [1.1.15]
### Added
- Update documentation for component development
- Double-clicking sidebar resizer now collapses it to minimzed state.

## [1.1.14]
### Added
- Making sidebar resizable.

## [1.1.13]
### Removed
- Remove font-awesome as a dependency.
#### BREAKING
- Font-awesome must now be added as a dependency of the consuming application.  View README.md instructions on how to do this.

## [1.1.12]
### Added
- Update documentation

## [1.1.11]
### Changed
- Update asset paths to be relative so they work with base href.

## [1.1.10]
### Added
- Modify navigation component to take JSON object in addition to (or in lieu of) a URL.
- Navigation component now performs content projection (aka, transclusion).

## [1.1.9]
### Changed
- Update to latest Angular @5.0.0 and Angular-CLI @1.5.6 to fix this: https://github.com/angular/angular-cli/issues/9276
- Update to Bootstrap @4.0.0

## [1.1.8]
### Added
- Truncate long navigation elements using an ellipsis so the text does not overlap the drop arrow.

## [1.1.7]
### Added
- Add navigation link nesting.

## [1.1.6]
### Fixed
- Fix horizontal scroll issue for wide content.

## [1.1.5]
### Changed
- Sidebar footer now gets contents from a service.

## [1.1.4]
### Changed
- Adding a navigation service that constructs navigation based on a JSON object.  Navigation now uses this service.

## [1.1.3]
### Fixed
- Fix bug with Jenkins pipeline.

## [1.1.2]
### Fixed
- Fix bug whereby it was impossible to override colors for branding.  Needed to move the scss partials from sidebar and toolbar back into the assets/styles folder and out of the components themselves.

## [1.1.1]
### Changed
- Update colors
- Switch $primary-color to use dark gray
- Update pipeline
### Added
- Add icons for visual appeal
- Add a slot to pass sidebar footer controls into template
- Add mdc-web fonts

## [1.0.4]
### Changed
- Package name change for angular library
- Update pipeline
### Added
- Add web component library

## [1.0.3]
### Added
- Adding a Jenkins pipeline

## [1.0.1]
### Added
- Adding tests for i18n

## [1.0.1]
### Added
- Adding modal and multi-select components
### Changed
- Improving e2e tests
- Using multi-content projection in views in order to support a global navigation component.

## [1.0.0]
### Changed
-  Initial version of UI-SDK style guide.  This new repo replaces both of the previous ui-package-library and ui-package-trainer repos and is intended to unify both the library and the style guide documenting the library into the same repository for easier development.

## [0.0.1]
Initial version
