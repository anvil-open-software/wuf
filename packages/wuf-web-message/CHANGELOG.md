# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## ["2.0.1] - 2020-01-23
### Migrated
- Migrated to angular@8.2.14.


## [2.0.0-rc.2] - 2019-04-01
### Fixed
- Close button hover color was set to var(--wuf-color-black).  Switched to use var(--wuf-message-hover-color) so the value can be easily overridden.
### Added
- Added a clearAll() method to remove any currently displayed messages.  This is helpful for when we want to re-submit a form, for example.

## [2.0.0-rc.1] - 2019-02-14
### Changed
- Upgrade to Angular 7

## [1.0.0] - 2019-02-01
### Changed
- Initial version
