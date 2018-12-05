# Changelog
All the changes for the core angular app module.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2018-11-07
- platformBrowserDynamic().bootstrapModule() done in Initialize() function during runtime in --prod results in error.  
  Moved to main.ts

## [2.0.3] - 2018-10-24
- Moved functions from forRoot() to constructor using ApplicationConfig provider.

## [2.0.2] - 2018-10-12
### Added
- Added support for refreshing authorization value.

## [2.0.1] - 2018-10-12
### Changed
- Updating dependencies to kg-ang-app-router

## [2.0.0] - 2018-10-09
### Changed
- Finalizing release candidate

## [2.0.0-rc.1] - 2018-09-27
### Changed
- Updating to Angular 6
#### BREAKING
- Do not update to this package unless you have updated your app to use the Angular 6 version of Quick Start and KION-components.

## [1.0.4] - 2018-04-04
### Added
- Root component for bootstrapping the application.

## [1.0.3] - 2018-04-04
### Added
- Core Http Service that provides simplified GET/POST/PUT/DELETE functionality.
    - Integrates into the datasource functionality to get the server address for the request rather than hardcoding it in.

## [1.0.2] - 2018-02-04
### Changed
- Updated files to be packaged by yarn.

## [1.0.1] - 2018-02-04
### Added
- Publish script

## [1.0.0] - 2018-02-04
### Added
- Initial creation of angular module.
