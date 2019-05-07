# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [2.0.0-rc.7] - 2019-05-14
### Added
- Adding a setTempConfig() method to allow temporarily changing the config without committing it to local storage.

## [2.0.0-rc.6] - 2019-03-14
### Fixed
- Fixing setStorageKey() function

## [2.0.0-rc.5] - 2019-03-14
### Added
- Adding a setStorageKey() function that allows the app to specify the storage key name

## [2.0.0-rc.4] - 2019-03-13
### Changed
- Removing darkTheme prop from the config object.  This allows the app to NOT specify a value for darkTheme and ensures we won't accidentally override a non-value with a default value should the app fail to specify a value for darkTheme.

## [2.0.0-rc.3] - 2019-03-13
### Changed
- Nothing.  Just a test publish.

## [2.0.0-rc.2] - 2019-03-13
### Changed
- Remove optional properties from the default config object.

## [2.0.0-rc.1] - 2019-02-14
### Changed
- Upgrade to Angular 7

- Initial version
## [1.0.0] - 2019-02-01
### Changed
- Initial version
