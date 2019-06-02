# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [2.0.0-rc.18] - 2019-06-02
### Changed
- Changing padding around table header actions for a slighly cleaner look.
### Fixed
- --wuf-table-filter-bg-color now uses var(--wuf-table-head-bg-color) for better dark theme compatibility with Smart Table
- --wuf-table-filter-color now uses var(--wuf-table-head-color) for better dark theme compatibility with Smart Table

## [2.0.0-rc.17] - 2019-05-28
### Changed
- add padding-bottom: 20px to .mat-slide-toggle-group

## [2.0.0-rc.16] - 2019-05-10
### Fixed
- Removing css-rgba() function due to some apparent inconsistency.
- Ensure mat pseudo checkboxes are using CSS custom props for background color.
- Fix tab body not clickable (bug introduced in 2.0.0-rc.14)

## [2.0.0-rc.15] - 2019-05-10
### Fixed
- css-rgba(var(--wuf-color-rgb-primary), .54) needs to be wrapped in #{}.  Otherwise, active sliders weren't showing the correct background color.

## [2.0.0-rc.14] - 2019-05-09
### Fixed
- Fix issue where content toolbar's dropshadow doesn't overlap tab contents.

## [2.0.0-rc.13] - 2019-05-02
### Fixed
- --wuf-font-muted-color now compatible with dark theme mode.

## [2.0.0-rc.12] - 2019-04-30
### Fixed
- Ensure expansion panel titles are themed

## [2.0.0-rc.11] - 2019-04-30
### Added
- Add CSS custom properties to override Angular Material Expansion Panels so they work with themes.

## [2.0.0-rc.10] - 2019-04-30
### Fixed
- Add missing CSS overrides for some Angular Material buttons

## [2.0.0-rc.9] - 2019-04-29
### Added
- Add some additional CSS overrides to some Angular Material Elements to force them to use CSS custom properties where possible
### Fixed
- Fixed css-rgba() SCSS function for SASS compatibility.

## [2.0.0-rc.8] - 2019-04-24
### Added
- Created new darktheme() mixin to generate dark theme css custom property overrides
- Using darktheme() mixin inside of stronger "body" selector

## [2.0.0-rc.7] - 2019-04-19
### Fixed
- mat-buttons need !important to use --wuf-button-border-radius

## [2.0.0-rc.6] - 2019-04-19
### Added
- Add a --wuf-button-border-radius variable

## [2.0.0-rc.5] - 2019-04-18
### Fixed
- scss wuf-theme-button-radius() method now working as expected
### Added
- Add a scss variable for button radius.
- Removing $zindex-popover for z-index control. No longer needed for the now removed popovers.

## [2.0.0-rc.4] - 2019-04-03
### Fix
- Fixed issue where .mat-form-field-suffix showed partial pixel heights 

## [2.0.0-rc.3] - 2019-02-30
### Added
- Adding an animations partial with a fade effect.
- Adding an actions cell to table.

## [2.0.0-rc.2] - 2019-02-14
### Added
- Added classes for table headers
- Added new flex grow/shrink utilities from Bootstrap

## [2.0.0-rc.1] - 2019-02-14
### Changed
- Upgrade to Angular 7

## [1.0.1] - 2019-02-14
### Changed
- Moving form styles for Material Design overrides from Living Style Guide app into this package.
### Fixed
- Inputs on small screens now accounting for smaller font sizes and positioning hover underline accordingly.

## [1.0.0] - 2019-02-01
### Changed
- Initial version
