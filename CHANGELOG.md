# Changelog
Keeps track of changes made to the base building and packaging of the common components. Each package keeps their own [changelog.md](http://keepachangelog.com/en/1.0.0/) file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [2.0.0] - 2018-10-18
### Added
- Final release version
- Restoring a baseline version of Smart Tables that is compatible with Angular 6.

## [1.0.0-rc.1] - 2018-10-05
### Added
- Adding a side drawer component
### Changed
- Update documentation to reflect Angular 6 and new workflow
### Fixed
- Add font family for Vaadin Grid column headers to match base font family

## [1.0.0-rc.0] - 2018-09-27
### Changed
- A fresh start with a reset version number for the Angular 6 version of a combined Living Style Guide and Common-Components monorepo.
#### BREAKING CHANGES
- Smart Table has been deprecated and removed from @kion/kg-ang-library. We strongly suggest moving to Vaadin Grid.
