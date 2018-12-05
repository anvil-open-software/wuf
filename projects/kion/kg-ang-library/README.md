Developing Angular-Based Components
==================================

Follow these steps to scaffold, build, test, and integrate an **Angular component/service/directive** into your consuming application.  

The WUF's Angular Library (@kion/kg-ang-library), located at `~/common-components/packages/library-angular` is comprised entirely of Angular-based components.  It is intended to be developed alongside the Living Style Guide app.

The Angular-based library is provided primarily to assist in transitioning from Angular-based components to standards-based web components.  Earlier versions of the WUF were comprised of an Angular-based style guide app and a library of Angular-based components.  Since the initial WUF we have determined that we would adopt web components as the standard for all components going forward. 

Developing the Angular-Based kg-library-angular Package
-------------------------------------------------------
To create an Angular-based component, simply create Angular-based components, directives, services, etc. as you normally would (follow the examples set by the existing elements) in this directory and test them locally as you normally would.

HINT: It is often easier to develop a component in the Living Style Guide app and *afterwards* bring the component into the library.  This allows you to develop and test your component without having to build the component externally and then install it in an application.

### Unit Testing
Angular-CLI is present in `~/common-components/packages/kg-ang-library/`, which means unit tests can be run through it.  As you are developing your component, it's a good idea to also run the test runner at the same time.  Navigate to `~/common-components/packages/kg-ang-library/` and issue the following command:

```bash
$ ng test
```

### Ensure AOT Mode Works
Even though the Angular library will not be run as a standalone application, it's a good idea to ensure that it can still be built in AOT mode.  This will save you a lot of headaches when using your component in an application later.  You can do this via Angular-CLI:
```bash
$ ng build --prod
```

### Prepare your Component for Import in an External App
Before your component can be used in another application, it must be wrapped up in a module.  It is then the _module_ that is exported from the Angular library and consumed by the 3rd party application (the style guide included).

1. Create a module that consumes your component.
2. Import your module into `~/common-components/packages/kg-ang-library/src/lib/src/lib.module.ts`, following the existing examples.
3. Export your module from `~/common-components/packages/kg-ang-library/src/lib/index.ts`, following the existing examples.

Building the Library
-----------------------------------
Before @kion/kg-ang-library can be published to the NPM registry, merged into the master branch, or used in the local style guide app during development, it **must** first be built.  We use a node script `build.js` for this process.  
To run the build execute the following command from `~/common-components/packages/kg-ang-library/`:

```bash
$ npm run build
```

This will generate a `dist/` directory within `~/common-components/packages/kg-ang-library/`. The output of the build is formatted in standard [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit) and is compatible with an Angular compiler (ngc) running in both AOT and JIT mode.

The `dist/` directory is now consumable from within the Living Style Guide app `~/living-style-guide`.

Increment the Library Version
---------------------------------------------
Increment the version number of the kg-angular-library in `~/common-components/packages/kg-ang-library/package.json`.

Documenting Your Component
--------------------------
If you ran `npm run bootstrap -- symlink` from within `~/living-style-guide`, then the Living Style Guide at is already consuming this Angular Library.  Assuming you properly exported your component's module and built the library (see above), the Living Style Guide shoudl already have picked up your changes.  If you don't see your chanages immediately, simply restart the server for the Living Style Guide to pick up the changes.

Refer to `~/living-style-guide/README.md` for instructions on using and documenting your new components within the Living Style Guide.

Document Your Changes
----------------------
Be sure to document all of your changes, paying particular attention to any potential migration issues, by updating `~/common-components/packages/kg-ang-library/CHANGELOG.md`.

Publishing @kion/kg-ang-library
-----------------------------
Once a component has been created, built, and documented (see above), issue a merge request for this repo.

Once your merge request is accepted, our continuous integration (CI) pipeline via Jenkins will publish a new version of @kion/kg-ang-library to the [Artifactory registry](https://artifactory.dematic.com/artifactory/webapp/#/artifacts/browse/tree/General/npm-local/@kion/kg-library-angular/-/@kion).

Your changes will now be available in external applications via NPM.

Using @kion/kg-ang-library in External Applications
---------------------------------------------
Refer to installation instructions at `~/common-components/packages/kg-ang-library/src/lib/src/README.md`.
