# Changelog
Keeps track of changes made to the base building and packaging of the common components. Each package keeps their own [changelog.md](http://keepachangelog.com/en/1.0.0/) file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [2.0.7] - 2018-11-26
### Fixed
- Fixed issue in light theme where inputs in an error state can show a partially overlapping top border under some circumstances that causes a thin line to appear at the top of the input.
- Misc improvements to input styling strategy.

## [2.0.6] - 2018-11-15
### Changed
- Add styling for toasts

## [2.0.5] - 2018-11-01
### Changed
- Improved dark theme styling for kg-ang-gridster
- Improved styling for chips and chips in form inputs
- Add dark theme styling for Angular Material autocomplete panels

## [2.0.4] - 2018-10-30
### Added
- Add dark theme styling for kg-ang-gridster

## [2.0.3] - 2018-10-30
### Added
- Styling to Angular Material menus to make compatible with Dark Theme

## [2.0.2] - 2018-10-29
### Added
- Adding more CSS custom properties for input colors
- Improving dotted underline style for disabled/read-only inputs with Dark Theme
- Adding CSS custom properties for Material Design card colors
### Changed
- Card background now darker than body background in Dark Theme

## [2.0.1] - 2018-10-12
### Fixed
- Fixed Angular Material raised buttons with dark theme so they use the color system properly.
- Fixes for missed Angular Material form elements, including multi-select.  Improve dark theme compatibility.
- Darken body text a little in dark theme to make easier on the eyes.
- Angular Material inputs with errors should use danger color for labels.
- Create styling for Angular Material readonly inputs.
- Create hover state for Angular Material inputs.
- Angular Material card components now compatible with dark theme.
- Angular Material date picker now compatible with dark theme.  NOTE: If you had previously created ad hoc styling for the date picker, it's probably no longer required.

## [2.0.0] - 2018-10-09
### Changed
- Finalizing release candidate

## [1.0.0-rc.3] - 2018-10-08
### Fixed
- Fix Material colors for dark theme mode with overlays and form controls.
### Added
- Additional styles for form elements

## [1.0.0-rc.2] - 2018-10-04
### Fixed
- Fix image path issue for default logo.

## [1.0.0-rc.1] - 2018-09-30
### Changed
- Assets previously in @kion/kg-library-angular have been moved here as their own package.
