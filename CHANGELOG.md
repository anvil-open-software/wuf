# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [2.0.0-rc.1] - 2019-02-14
### Changed
- Upgrade style guide, packages, and projects from Angular 6 to Angular 7
#### BREAKING
- Removing origami polyfills for polymer support due to overhead.
- Removing polymer components, including Vaadin Grid.  WUF no longer supports polymer in favor of native angular and web components only.  Polyfills for polymer can be added to a Quick Start application-based instance as needed.
- Removing wuf-ang-toasts as it was only a thin wrapper on Material Toasts, which can be used directly.

## [1.0.2] - 2019-02-14
### Fixed
- Fix tests.

## [1.0.1] - 2019-02-14
### Changed
- Update documentation for forms.  Moving form-related styles into wuf-web-assets package.

## [1.0.0] - 2019-02-01
### Changed
- Initial version
