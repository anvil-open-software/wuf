# Changelog
Keeps track of changes made to the base building and packaging of the common components. Each package keeps their own [changelog.md](http://keepachangelog.com/en/1.0.0/) file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [2.0.0-rc.2] - 2018-11-15
### Fixed
- Ensure filter inputs are 100% width of container.  This allows column widths to flex based on "width" property.

## [2.0.0-rc.1] - 2018-11-09
### Changed
- Initial version.  Moving Smart Tables back into WUF.  Smart Tables, in this iteration, are missing automcomplete filters and the ability to pass a URL to Smart Table for data fetching.
- TODO: Some additional styling work is required to make Smart Tables conform with current UX Board recommendations for grids.
- The following name changes have been made to adhere to the "Kg" prefix convention for classnames.  If you are using these, you must update your code accordingly:
    - ValidatorService --> KgSmartTableValidatorService
    - ViewCell --> KgSmartTableViewCell
    - DefaultEditor --> KgSmartTableDefaultEditor
    - Editor --> KgSmartTableEditor
    - Cell --> KgSmartTableCell
    - LocalDataSource --> KgSmartTableLocalDataSource
    - ServerDataSource --> KgSmartTableServerDataSource
