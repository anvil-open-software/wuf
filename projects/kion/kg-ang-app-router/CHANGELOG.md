# Changelog
Keep track of the changes to the core angular application router.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.0.3] - 2018-11-07
### Changed
- Add activeOptions as an optional property to a route

## [2.0.2] - 2018-10-24
- Moved functions from forRoot(), and forChild() to constructor using RouteConfig and ModuleConfig providers.

## [2.0.1] - 2018-10-09
### Changed
- Make login & logout sceen component optional

## [2.0.0] - 2018-10-09
### Changed
- Finalizing release candidate

## [2.0.0-rc.2] - ???
### Changed
???

## [2.0.0-rc.1] - 2018-09-27
### Changed
- Updating to Angular 6
#### BREAKING
- Do not update to this package unless you have updated your app to use the Angular 6 version of Quick Start and KION-components.

## [1.0.4] - 2018-04-06
### Added
- Added materialDesignIconId to IRoute and IChildRoute so the main screen layout can assign an icon for the navigation.
- Added component to IRoute for navigation at the root route level instead of just the sub route level.

## [1.0.3] - 2018-04-06
### Fixed
- Fixed changelog, 1.0.2 => Changed was appending to Added's list.

## [1.0.2] - 2018-04-05
### Added
- Injectable called DefinedRoutes to access all the routes defined in the application.

### Changed
- Breaking: Changed module function addRoutes to addRoute since it takes only 1 route object.

## [1.0.1] - 2018-04-03
### Added
- Angular module with ngRouter built in.
- Allow for specifing routes in a forChild() function.
