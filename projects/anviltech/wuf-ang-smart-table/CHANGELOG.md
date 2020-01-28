# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## ["2.0.1] - 2020-01-23
### Migrated
- Migrated to angular@8.2.4.

## [2.0.0-rc.3] - 2019-06-02
### Fixed
- noDataMessage now ngx-translate compatible
- fix column count for no data message

## [2.0.0-rc.2] - 2019-05-30
### Added
- Added compatibility with ngx-translate.
- Added table title attribute to config.
- All labels (including title) can now be a string OR a translate key.  If it's a translate key, it will be translated by ngx-translate.
### Changed
- Now using @anviltech/wuf-web-assets table styles directly via @include.  No longer a need to replicated them inside smart-table.
### BREAKING
- *ButtonContent and *Tip properties no longer used (e.g., add.addButtonContent, add.addTip).  Replaced with *.label and *.tip.
- Removing "inputClass" for all form controls
- Changed structure of config.  Refer to WUF Living Style Guide documentation.

## [2.0.0-rc.1] - 2019-02-14
### Changed
- Upgrade to Angular 7

## [1.0.0] - 2019-02-01
### Changed
- Initial version
