# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.0.1] - 2020-01-28
### Fixed
- Migrated to Angular 8.1.4, the same version used by angular cli.

## [2.0.0-rc.19] - 2019-12-18
### Fixed
- without a deploy key with r/w access, pushing the tag will fail the build

## [2.0.0-rc.18] - 2019-12-09
### Removed
- removed dependency on wasvic/node_dev, use node:10.15.1-alpine directly

## [2.0.0-rc.17] - 2019-07-09
### Added
- Support for configuring dark theme based on the user set up
### Fixed
- A bug whereby merges causes the build to break due to an attempt to tag using and existing tag.

## [2.0.0-rc.16] - 2019-06-28
### Fixed
- Fixed example drawer z-index issue.  It now appears over the tab headers.
### Added
- Now detect changes to dark/light theme mode in the OS and apply dark/light theme mode in the app accordingly.  Requires supported browsers.

## [2.0.0-rc.15] - 2019-06-13
### Fixed
- Added support for publishing changed packages semi-automatically, the the following workflow, `O` means an optional step:
  # Work on your packages;
  1. `O` Find out the `WUF` packages that `lerna` knows about;
     - `$ lerna ls -l`
  1. `O` Find out the dependencies between the @anviltech packages;
     - `$ yarn list | grep @anviltech`
  1. Find out the latest version of all @anviltech packages in the registry;
     - `$ npm search @anviltech --json | json -a name version`
  1. Find out what packages changed locally;
     - `$ lerna changed`
  1. Update the packages package.version using one of the two methods below;
     - Manually
       - Change the versions of the packages that changed; see above to ensure you select the next viable version
       - Commit the changes
     - Automatically - We will use the `manual` mode for now, and learn the ins and outs of using a combination of `lerna verion` and `lerna publish`;
  1. Issue a pull request ... the changed packages will be published when your branch is merged into `master`;

## [2.0.0-rc.14] - 2019-06-03
### Fixed
- Stopped CircleCI from attempting to build of the `gh-pages`  branch
=
## [2.0.0-rc.13] - 2019-06-02
### Changed
- Create a SharedModule.  Put TranslateModule inside.  Also move CustomMaterialModule into it.
- Update docs for Smart Table changes

## [2.0.0-rc.12] - 2019-05-31
### Fixed
- Certain assets are not handled correctly when deploying to GitHub Pages.

## [2.0.0-rc.11] - 2019-05-08
### Added
- Added continuous build and continuous deployment to [GitHub](https://anvil-open-software.github.io/wuf/); this is work in progress, with the outstanding issue being:
- to understand and account for Angular's handling of asset and route URLs when deploying to a folder other than the root;
- to develop an automated mechanism to publish WUF components that are new or changed;
- to develop a mechanism to publish feature branches to GitHub pages.

## [2.0.0-rc.10] - 2019-05-07
### Fixed
- Adding HttpClientTestingModule to any tests that use ngxMdModule to prevent it from emitting confusing error message.  This fixes https://github.com/anvil-open-software/wuf/issues/33.

## [2.0.0-rc.9] - 2019-05-01
### Added
- Document the new isActive() method for the drawer.

## [2.0.0-rc.8] - 2019-05-01
### Fixed
- Fix several inputs error in forms component by removing the <form> tag

## [2.0.0-rc.7] - 2019-04-29
### Added
- Add documentation for new drawer attributes.

## [2.0.0-rc.6] - 2019-04-29
### Fixed
- Fix some failed unit tests

## [2.0.0-rc.6] - 2019-04-26
### Added
- Added documentation about drawer footer

## [2.0.0-rc.5] - 2019-04-24
### Changed
- Build output to dist folder instead of dist/anviltech-components
- Use Roboto as font for default theme.

## [2.0.0-rc.5] - 2019-04-19
### Changed
- Add documentation for new --wuf-button-border-radius css custom property.

## [2.0.0-rc.4] - 2019-03-25
### Changed
- New lock file with updated packages
- "bootstrap" script now performs yarn install
- Update publish scripts in all packages to use yarn

## [2.0.0-rc.3] - 2019-03-13
### Add
- Added ngx-translate along with documentation for its use.

## [2.0.0-rc.2] - 2019-03-13
### Changed
- Standardizing unit tests
- Removing unused dependencies
- Improve unsubscribes by checking for existence of subscription first
- Update publish scripts to use Yarn
- Use Arial in layout diagrams to ensure consistency across browsers
### Added
- Add generic favicons

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
