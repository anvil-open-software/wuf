Developing Angular-Based Components
==================================

Follow these steps to scaffold, build, test, and integrate an **Angular component/service/directive** into WUF's Library of Components, and then use this new element inside your application.  

The WUF's Library of Components is comprised of components of many flavors, including web components, Polymer components, and Angular components.  This guide focuses on the creation and usage of Angular components, specifically.

Creating An Angular Library Component
-------------------------------------------------------
All WUF library components, including Angular components, are created and added inside the @anviltech/wuf repository at: [https://github.com/anvil-open-software/wuf](https://github.com/anvil-open-software/wuf)

Clone the @anviltech/wuf repo to your local machine.  Be sure to follow the setup instructions at [https://github.com/anvil-open-software/wuf/blob/master/README.md](https://github.com/anvil-open-software/wuf/blob/master/README.md).

### Name the Library Component
Our component naming convention follows this format:
* @anviltech/wuf-[type]-[component-name]
* We use the "@anviltech/" scope for all components.
* We use "wuf-" as our prefix for all services, components, modules, etc.
* The "type" in this case is "Angular", or "-ang".
* The "component-name" uses Angular's dash-spaced naming convention.

Therefore, if my component is called "My Component", it's library name will be:

**@anviltech/wuf-ang-my-component**

We will use the token [name-of-library] to represent this library component name in the following instructions.

### Create the Library Component
Run the following command from @anviltech/wuf's root folder:

```bash
ng generate library @anviltech/[name-of-library] --prefix=wuf
``` 

This will create a new folder for `@anviltech/[name-of-library]` at `./projects/anviltech/[name-of-library]` and populate that folder with scaffolding files for a new module, one service, and one component.  Collectively, Angular 6 refers to this collection as a "project".

### Revise Generated Files
We now need to make some modifications to the scaffolded files so that your new component will fit within the WUF component ecosystem.

Revise the root `angular.json` file at `./angular.json` to include a "production" configuration for your new library component.  This will allow us to build your library component in Angular's AOT mode which is much more strict than Angular's JIT mode and will help us catch errors during development before they become a bigger problem in a production environment.  Always build in AOT mode!

```json
        "[name-of-library]": {
            "root": "projects/anviltech/[name-of-library]",
            "sourceRoot": "projects/anviltech/[name-of-library]/src",
            "projectType": "library",
            "prefix": "wuf",
            "architect": {
                "build": {
                    "builder": "@angular-devkit/build-ng-packagr:build",
                    "options": {
                        "tsConfig": "projects/anviltech/[name-of-library]/tsconfig.lib.json",
                        "project": "projects/anviltech/[name-of-library]/ng-package.json"
                    },
                    "configurations": {
                        "production": {
                            "project": "projects/anviltech/[name-of-library]/ng-package.json"
                        }
                    }
                },

```

Revise the root `tsconfig.ts` file at `./tsconfig.ts` so that your new project's local `dist` folder is used for builds and *NOT* the default root `dist` folder.  This will make it easier to publish your component at a later step.

    "paths": {
      ...
      "[name-of-library]": [
        "./projects/anviltech/[name-of-library]/dist"
      ],
      "[name-of-library]/*": [
        "./projects/anviltech/[name-of-library]/dist/*"
      ]
    }

Revise the project's `./projects/anviltech/[name-of-library]/ng-package.json` file to also point to the project's local `dist` folder and to whitelist any local dependencies:

```json
{
    "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
    "dest": "./dist",
    "whitelistedNonPeerDependencies": [
        "."
    ],
    "lib": {
      "entryFile": "src/public_api.ts"
    }
}
```

Add the following properties to the project's `./projects/anviltech/[name-of-library]/package.json` file:

```json
    "description": "Project description",
    "author": "name <emailaddress>",
    "scripts": {
        "build": "ng build --prod @anviltech/[name-of-library-without-scope]",
        "packagr": "npm run build",
        "pub": "npm run packagr && npm publish dist"
    },
    "publishConfig": {
        "access": "public"
    },
    "main": "dist/bundles/kion-[name-of-library-without-scope].umd.js",
    "typings": "dist/anviltech-[name-of-library-without-scope].d.ts",
```

Modify the `version` number in the project's `./projects/anviltech/[name-of-library]/package.json` file so that the major version matches that used by the other packages.  In WUF, version 2.0, for example, the version number of the new package should be `2.0.0`.

Simplify the selector name of the component in the `[name-of-library].component.ts` to remove the superfluous "wuf-ang".  "wuf-wuf-ang-[name]" becomes simply "wuf-[name]".  For example, the selector "wuf-wuf-ang-my-component" would become "wuf-my-component".
```typescript
@Component({
    selector: 'wuf-[name]',
    templateUrl: 'wuf-ang-[name].component.html',
    styleUrls: ['wuf-ang-[name].component.scss']
})
```

Add view encapsulation in `[name-of-library].component.ts`.  This adds a shadow DOM and prevents users of your component from changing any styles that you do not want them to be able to change.

```typescript
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'wuf-[name]',
    templateUrl: 'wuf-ang-[name].component.html',
    styleUrls: ['wuf-ang-[name].component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
```

Simplify the classname of your component.  We don't need "Ang" in the classname.  Perform a global search and replace within your new component's root folder.  For example, the classname "WufAngMyComponent" would become "WufMyComponent".

### Create Documentation
Your component must be diligently documented in order to qualify for inclusion in WUF.  The first step is to create a README file at `./projects/anviltech/[name-of-library]/README.md`.  This file should document setup and instructions for your component in [markdown format](https://www.markdownguide.org/getting-started).

You must also keep track of all version changes in a CHANGELOG at `./projects/anviltech/[name-of-library]/CHANGELOG.md`.  This file uses [Changelog syntax](http://keepachangelog.com/en/1.0.0/) along with [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

*Both* of these files can later be included in the Living Style Guide (see below) along with examples of your component's usage.

### Declare Local Dependencies
If your new component doesn't depend on any other local packages/projects from WUF, you can skip this step.

If your new component DOES depend on other local packages/projects from WUF, add each dependent package to the "dependencies" section of its `package.json` file.  For example: 

```json
    "dependencies": {
        "@anviltech/wuf-web-assets": "^2.0.5",
        "@anviltech/wuf-ang-utils": "^2.0.0",
        "@anviltech/wuf-ang-configuration": "^2.0.0",
        "@anviltech/wuf-ang-layout": "^2.0.3"
    },
```

You now need to whitelist each of these local dependencies.  To do so add a `whitelistedNonPeerDependencies` property to your new package's `ng-packagr.json` file:

```json
{
    "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json",
    "dest": "./dist",
    "whitelistedNonPeerDependencies": [
        "."
    ],
    "lib": {
        "entryFile": "src/public_api.ts"
    }
}

```

### Install All Dependencies
We now need to install all of your new package's dependencies.

If we were to run a typical `npm install` or `yarn install`, these commands would *only* install packages that are published publicly in the NPM registry or in the internal Artifactory registry.  If your new library component depends on other new, unpublished library components from within @anviltech/wuf or new, as-yet unpublished versions of library components from within @anviltech/wuf, however, the above command will *fail* with a 404 error.  That is because the component or the updated component version number only exists locally and does not yet exist in the registry.

We often want to declare dependencies *between* our different library components.  @anviltech/wuf-ang-layout, for example, depends on @anviltech/wuf-ang-configuration and @anviltech/wuf-web-assets.  If we make local changes to @anviltech/wuf-ang-configuration or @anviltech/wuf-web-assets, we want @anviltech/wuf-ang-layout to see those changes right away so we can develop against those changes.

This is where Lerna and Yarn Workspaces come into play.

Instead of running the `yarn install` command, CD to the application root and run the following command:

```bash
lerna bootstrap
```
or if you don't have lerna globally, execute
```bash
yarn run lerna:bootstrap
```

When run from the root folder, this command will bootstrap *all* of the packages in the entire repo (including those in `./packges` and `./projects`) by installing all of their dependencies (creating all of the required `node_modules` folders along the way) and linking any cross-dependencies between projects and packages.

Your new library component is now ready for development.

Add a Shadow DOM
-----------------
Every component must use a Shadow DOM.  A Shadow DOM protects the component's styling so that it cannot be unduly changed by a developer in ways that are incompatible with the Style Guide.

Use CSS Custom Properties
-------------------------
CSS custom properties work with the Shadow DOM to open up a "gateway" for changing select styles and branding elements.  They function much like and API would for data.  By exposing a select and limited number of CSS custom properties to the consumers of any given component, we set restrictions on what the consumer is allowed to change.  Such properties are usually limited to colors.

Refer to the documentation on [CSS Variables](http://localhost:4200/setup/cssprops) to learn how to use CSS custom properties with components.

Dark Theme Compatibility
------------------------
Every component must be dark theme compatible.  Refer to the documentation on the [Dark Theme Mechanism](/themes/darktheme) to learn how to do this.

Building your Library Component
-----------------------------
While developing, you can test your library component to see if it builds at any time.
 
There are several ways to do this...

### Option 1: 
Run the following command from the workspace's root folder:
```bash
ng build --prod [name-of-library]
```

### Option 2:
Alternatively, run the following command directly from the component's folder `./projects/anviltech/[name-of-library]`:
```bash
yarn build
```

### Option 3:
Alternatively, you can build ALL of the packages/projects for the entire WUF repo by running the following command from the WUF root folder:
```bash
yarn run lerna:build
```

Any of the above build options will kick off the build process (courtesy of [ng-packagr](https://github.com/ng-packagr/ng-packagr)) and create a `dist/` folder at `./projects/anviltech/[name-of-library]/dist`.  The output to this folder will be in [Angular Package Format](https://github.com/ng-packagr/ng-packagr/issues/705).

Because we set up our NPM build script to use the `--prod` flag, your new component will be built in AOT mode.  (Always build in AOT mode!  Trust me, it will save you a lot of headaches when tracking down bugs in production if you catch those bugs *BEFORE* they get to production).

Unit Testing
------------
Angular-CLI is present in @anviltech/wuf, which means unit tests can be run through it.  As you are developing your component, it's a good idea to also run the test runner at the same time.  Navigate to the application root and issue the following command:

```bash
$ yarn test
```

This command will run all tests for all components in `./packages` and `./projects`.

You can also run the test for *only* your library component by running this command from `./projects/anviltech/[name-of-library]`.

Cross-Linking Packages
-----------------------
The main workspace application in @anviltech/wuf is the Living Style Guide.  When you run `npm run start` at the root of @anviltech/wuf and visit http://localhost:4200 in your browser, you will see the Living Style Guide.

@anviltech/wuf uses Lerna and Yarn Workspaces to link library components from `./packages` and `./projects` to the main workspace application (the Living Style Guide) and also link any cross-dependencies.

This linking process allows you to develop library components within this repo and see the results immediately within the workspace application *without having to publish your libraries to Artifactory*.  This makes component development *much* easier.

Thanks to Angular 6 and ng-packagr, the main workspace application will also find your new library component whenever you use a standard barrel import `@import { Wuf[name-of-library] } from '@anviltech/[name-of-library]'` statement, exactly as if your library component were already published to Artifactory.  In fact, you don't even need to add your library component to the main workspace's `./package.json` file.  When the main workspace application is running, Angular 6 will use the `./tsconfig.ts` file to locate your library component by package name. 

Running the Living Style Guide
------------------------------
To run the main workspace application, execute the following command:

```bash
$ yarn start
```

The main workspace application will now be available at [http://localhost:4200](http://localhost:4200).

The Living Style Guide is where you will document usage of your library component and provide some examples of its usage.  To document your component within the Living Style Guide, create a new page to host your component's documentation.  You can use Angular-CLI commands for this or simply copy an existing page to serve as a template.

Your component's documentation page should include tabs for all of the following:
- *Example*: Example(s) of your component in action 
- *Where/When to use*: UI design patterns for usage and why this component should be used over another
- *API*: The API and technical details for setting up and for interacting with your component.  This is where you can insert the `README.md` file from above.
- *Change Log*: This is where you can insert your CHANGELOG.md file from above.

To display the README.md and CHANGELOG.md files created within the Living Style Guide, simply add a <markdown> tag:

```typescript
<markdown path="assets/documentation/packages/[name-of-library]/README.md"></markdown>
```

Document your New Component
---------------------------
Every module added to the Library of Components **must** have a corresponding section in the Living Style Guide in order to document the use of that component.  For every new component you create in the library you need to add a new Living Style Guide page to document it.  You can do this using Angular-CLI from the root WUF folder:

```bash
$ ng g component pages/components/<my-page-name>
```

This creates a new page in the `~web-ui-framework/src/app/pages/components/` folder.

You can now use this new page in the Living Style Guide to document the new library component.  Your new page should have each of the following tabs:
* **Example**. Shows the component in use.
* **When/Why To Use**.  Explains when to use the component and under what circumstances.
* **API**. Explains how to install and use the component.
* **Changelog**. Tracks history of all changes to the component.

Increment the Library Version
---------------------------------------------
Whenever you modify your library component, you must increment the version number that appears in `package.json`.  Add a corresponding entry to the CHANGELOG.md when you do, explaining what changes were made in the new version.

Publishing Your Component
-----------------------------
Once a component has been created, built, and documented, issue a merge request for this entire repo.

Once your merge request is accepted, our continuous integration (CI) pipeline via Jenkins will automatically publish a new version of your component to the [Artifactory registry](https://artifactory.dematic.com/artifactory/webapp/#/artifacts/browse/tree/General/npm-local/@anviltech/).

Your changes will now be available for use in external applications via the standard NPM include process.
