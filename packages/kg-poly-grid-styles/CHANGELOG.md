# Changelog
Keeps track of changes made to the base building and packaging of the common components. Each package keeps their own [changelog.md](http://keepachangelog.com/en/1.0.0/) file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [2.0.0] - 2018-10-09
### Changed
- Finalizing release candidate

## [2.0.0-rc.0] - 2018-09-27
### Changed
- package name change from @kion/kg-grid to @kion/kg-poly-grid-styles
### BREAKING CHANGES
- In order to use the new package, you must change the package NAME as well as the VERSION
- The import path to the .js file has also changed.  It is now @kion/kg-poly-grid-styles/index.js, or just @kion/kg-poly-grid-styles.  Update your application's import paths accordingly.

## [1.1.2] - 2018-09-00
### Changed
- Additional improvements to styling:
- Column header font size now matches column filter input size.
- Column filters with sort icons now align with non-filterable column headers.
- All sort icons align.
- As per UX Board, the floating label uses primary color with a filter is active.

## [1.1.1] - 2018-09-01
### Changed
- Improved Vaadin column sorting contrast and add hover effect.

## [1.1.0] - 2018-08-30
### Added
- Added a CHANGELOG.md
- Added a README.md
### Changed
- Color values for Vaadin grid now uses CSS custom properties from kg-library-angular.  This allows it to use global CSS custom props from kg-library-angular as well as "dark theme mode".
#### BREAKING
- Be sure to upgrade your app to use @kion/kg-library-angular version 3.1.0 or higher so that the required CSS custom properties are available.  @kion/kg-library-angular@4.4.0 recommended.

## [1.0.2]
### Fixed
-  Bug fix

## [1.0.1]
### Fixed
-  Bug fix

## [1.0.0]
-  Initial version

