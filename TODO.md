TODO
--------

[x] Create an NPM organization called "anviltech" info@hivechain.com
[x] make sure the organization can use the @anviltech scope
[ ] Scoped packages are private by default; you must pass a command-line flag when publishing to make them public: 
https://docs.npmjs.com/creating-and-publishing-scoped-public-packages
https://docs.npmjs.com/orgs/managing-teams/index.html

[x] create generic logos
[x] convert @kion --> @anviltech
[x] convert file names from kg- --> wuf-
[x] change darren.luvaas@dematic.com --> delete
[x] replace https://gitlab.dematic.com/cloud_visualization_services/common-components with https://github.com/anvil-open-software/wuf
[x] change selectors to replace kg-
[x] change all package names from Kg___ to Wuf_______
[x] update all changelog files to show initial versions
[x] standardize all file names (e.g. gridster)
[x] update all package version numbers to v1
[x] make sure Dematic copyright is preserved
[x] delete wuf-ang-library package
[x] delete unused packages/projects
[x] fullTemplateTypeCheck in projects/anviltech/wuf-ang-navigation/tsconfig.lib.json should be set to true (https://github.com/angular/angular/issues/20523)
[x] change repository entries for all package.json
[x] package.json add publishConfig entry
[x] Set package.json from private to public.  If you set "private": true in your package.json, then npm will refuse to publish it.
[x] search for gitlab.dematic.com
[x] search for artifactory.dematic.com
[x] remove references to Quick Start Application (Minimal) and Quick Start Application (Complete)
[x] search for Dematic
[x] search for KION
[x] change skin/config names
[x] fix Roboto loading
[x] mention use of @anviltech scope in readme
[x] move roboto usage to default theme
[x] fix mat-tab-body so it will use font from theme
[x] change default font in wuf-theme-typography to system font.  Must update $font-family-sans-serif and $font-family-serif;
[x] delete font-awesome from 3rd party.  Remove from package.json
[x] delete form stuff from styles.scss
[x] document peer dependencies for material packages for navigation, web-assets, and layout
[x] do not import any images from wuf via angular.json
[x] replace favicons with generic favicon
[x] lighten subnav elements in theme 5
[x] ensure theme fonts are correctly applied to buttons and other material objects
[x] fix accent color for theme 5
[x] document how to load a font in theme files
[x] update theme file creation docs.  The default theme includes colors.  The build-in theme no longer includes logo.
[x] update all readme files
[ ] merge in latest code from HD (navigation and gridster improvements)
[ ] clean up form page.  Remove drawer
[ ] init NPM (include this in documentation?): https://docs.npmjs.com/creating-and-publishing-scoped-public-packages
[ ] publish all v1 packages using  `npm publish --access public`
[ ] provide documentation to Denis about the repo(s) to build, the order in which they ought to be build, etc.  Could be the Jenkins file.
[ ] remove polymer and nutmeg? (would need to rewrite wuf-code-sample and wuf-messages as angular components)
[ ] fix Jenkinsfile documentation
[ ] forms page: It looks like you're using ngModel on the same form field as formControl. 
[ ] load one of the theme files dynamically

FUTURE:
[x] move page title to right of page
[ ] ensure navigation with horizontal orientation highlights top-level navigation element when child element is active
[ ] Smart Table fixes:
    [ ] forms.js:1181 
        It looks like you're using ngModel on the same form field as formControl. 
        Support for using the ngModel input property and ngModelChange event with 
        reactive form directives has been deprecated in Angular v6 and will be removed 
        in Angular v7.
        
        For more information on this, see our API docs here:
        https://angular.io/api/forms/FormControlDirective#use-with-ngmodel
    [ ] browser.js:4408 [Deprecation] /deep/ combinator is no longer supported in CSS dynamic profile.It is now effectively no-op, acting as if it were a descendant combinator. /deep/ combinator will be removed, and will be invalid at M65. You should remove it. See https://www.chromestatus.com/features/4964279606312960 for more details.
[ ] when refreshing on mobile size then increasing width to desktop, sidebar icons stay minimized
[ ] the example button section no longer updates styles when theme is changed via droplist
[ ] create dynamic favicon that can be set via a config file: https://www.bennadel.com/blog/3408-creating-a-dynamic-favicon-service-in-angular-5-2-4.htm
[ ] sidebar transition CSS styling on sidebar-wrap does not account for position top
[ ] no smooth close animation on sidebar toggle under some circumstances
[ ] wuf-code-sample not displaying copy button under some circumstances
[ ] document sidebar toggling methods
[ ] document use of breakpoints in WUF
[ ] update gridster style as per Sven's proposal
[ ] create Jenkins workflow for publishing Artifactory components
[ ] create jenkins workflow for publishing Living Style Guide to web server
[ ] implement new CSS loader
[ ] Material inputs should support outline style
[ ] migrate content from UX Wikis into Living Style Guide
[ ] determine mechanism for updating title on a page-by-page basis
[ ] set app title based on config appName property
[ ] store sidebar expanded/collapsed state in config and restore on refresh
[ ] use BreakpointObserver in layout for sidebar reflow on responsiveness
[ ] create a split-panel component
[ ] implement BFF as a importable package for WUF
[ ] add search functionality to styleguide
[ ] set page titles using value from navigation.json
[ ] Add example Google charts to WUF
[ ] create demo of theme creation
[ ] write tests in LSG to test colors in themes
[ ] write tests for configuration with navigation in different layouts
[ ] add a linting step to build script for kion-components
[ ] update bootstrap process for ng5 version of WUF
[ ] decorate Paper text inputs such that they use a color system
[ ] improve left nav behavior on mobile
[ ] research use of ShadyCSS to support CSS custom properties in IE
[ ] get WUF working with IE11
[ ] create fallback theme colors for browsers that don’t support css custom properties
[ ] Add jsdocs to all WUF components
[ ] create a global messaging component
[ ] Flesh out UI/UX for global messaging
[ ] replace angular2-jwt with @auth0/angular2-jwt in apps with BFF
[ ] add auth services, authguards, and example usage in styleguide
[ ] get up to speed on VR development environments
[ ] Determine if it’s possible to create a pipeline by which changelog entries are added to a Sharepoint wiki automatically
[ ] research mechanism by which we can fix Chromium driver
[ ] rovide User Experience Standards for Keyboard Usage
[ ] ensure apps can be installed as PWAs
[ ] add inline values for CSS props in every component
[ ] complete responses for WUF evaluation
[ ] convert quick-start-bff to Angular 6
