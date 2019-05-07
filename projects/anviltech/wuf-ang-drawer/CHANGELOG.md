# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [2.0.0-rc.3] - 2019-05-01
### Fixed
- Fixed issue with z-index of drawer so that it doesn't appear above Angular Material select lists.
### Added
- Add an "isActive()" method to determine if the drawer is currently being displayed or not.

## [2.0.0-rc.2] - 2019-04-26
### Fixed
- Make sure OnDestroy is called to unsubscribe from subscriptions
### Added
- Adding "includeBackdrop" property (default = true) to allow turning off a backdrop
- Add minimize functionality for the drawer via "allowMinimize" and "minimize" attributes
- Create drawer footer for placement of buttons, etc

## [2.0.0-rc.1] - 2019-02-14
### Changed
- Upgrade to Angular 7

## [1.0.0] - 2019-02-01
### Changed
- Initial version
