Developing Web Component-Based Components
=============================================

Follow these steps to scaffold, build, test, and integrate a **web component** into your consuming application.  

[Nutmeg](https://github.com/abraham/nutmeg) is used to create and scaffold web components for WUF.  Nutmeg uses `npm init` commands, which means it does not need to be installed as a dependency within WUF.

Note that we generally use Yarn for component development within WUF.  However, Yarn commands are not compatible with Nutmeg, so we will be using `npm` commands throughout the following instructions.

Dependencies
-------------
* [Nutmeg](https://github.com/abraham/nutmeg), installed globally. *$* `npm install -g nutmeg`


Create a Component Stub
-----------------------

### Determine Library Component Name
Our component naming convention follows this format:
* @anviltech/wuf-[type]-[component-name]
* We use the "@anviltech/" scope for all components.
* We use "wuf-" as our prefix for all services, components, modules, etc.
* The "type" in this case is "Web Component", for which we use the abbreviation "-web".
* The "component-name" uses Angular's dash-spaced naming convention.

Therefore, if my component is called "Hello World", it's library name will be:

**@anviltech/wuf-web-hello-world**

We will use the token [name-of-library] to represent this library component name in the following instructions.

### Scaffold the Component
In the following example, we're going to create a 'hello world' web component that shows some simple text as part of example branch DLABS-1234.  We'll call this component `@anviltech/wuf-web-hello-world` and its class name will be `WufWebHelloWorld`.

1. CD to root WUF folder in your terminal (i.e., `~web-ui-framework/`).
2. Create the component scaffold: *$* `npm init @nutmeg wuf-web-hello-world name:string`.  Note that we do NOT include "@anviltech/" in the package name here, which would create a superfluous @anviltech folder. A `wuf-web-hello-world` folder is created at WUF root at `~web-ui-framework/wuf-web-hello-world` folder.  This new folder includes a number of files and children folders.  
3. MOVE the new folder into the `~web-ui-framework/` packages folder: *$* `mv wuf-web-hello-world projects`
4. Navigate into the component folder at its new location: *$* `cd packages/wuf-web-hello-world`
5. Remove the `.git` folder: *$* `rm -rf .git`  (Nutmeg assumes a pattern of one git repo per component.  We, on the other hand, want all web components to reside in the same repository as the rest of the WUF.)
6. Remove the `.gitignore` file: *$* `rm .gitignore`
7. Install dependencies: *$* `npm install`

### Refine the Component
* Navigate to the new component's root folder: *$* `cd  ~/web-ui-framework/packages/wuf-web-hello-world`
* Edit `wuf-web-hello-world/package.json` as follows:
  * Replace the `project/` string with the `@anviltech/` scope of the name property: `"name": "@anviltech/wuf-web-hello-world"`
  * Change the version: `"version": "1.0.0"`
  * Improve the description: `"description": "The wuf-web-hello-world component"`
  * Add an author: `"author": "Your Name <your email>"`
  * Update the scripts section to include a "packagr" and a "publish" script: 
  ```typescript
      "scripts": {
        "build": "nutmeg build .",
        "prebuild": "nutmeg clean .",
        "prepare": "npm run build -- --production",
        "pretest": "npm run build",
        "start": "nutmeg serve .",
        "test": "nutmeg test .",
        "watch": "nutmeg watch .",
        "packagr": "npm run build",
        "publish": "npm publish"
      }
    ```
  * Add a publish section to ensure the package can be published to the public registry (packages with scopes are otherwise private by default):
  ```typescript
      "publishConfig": {
          "access": "public"
    }
  ```
  * Run a sanity test: *$* `npm run test`

Develop the Component
----------------------
* Ensure that `~/web-ui-framework/packages/wuf-web-hello-world/package.json.version` reflects the desired component version.
* Edit the `~/web-ui-framework/packages/wuf-web-hello-world/src/wuf-web-hello-world.ts` component logic as required to fulfill its acceptance criteria
* Edit the `~/web-ui-framework/packages/wuf-web-hello-world/test/wuf-web-hello-world.test.ts` component test as required to validate its acceptance criteria. You might have to change `test/fixture/wuf-web-hello-world.fixiture.html` as well
* Test the component from within `~/web-ui-framework/packages/wuf-web-hello-world/`: *$* `npm run test`
* Edit and test until all the requirements are implemented and the acceptance criteria satisfied.

Component Structure
-------------------
All packages should be structured in the following way when built/published.  Using the `wuf-web-hello-world` example from above, the structure for that package should look like:

```text
wuf-web-hello-world/
├── dist/
|  └── <source>.ts
|  └── (optional) package.json
├── package.json
└── src/
   └── <source>.ts
 ```
...were the dist/ folder is created during the build process prior to publication.

This structure is fairly common for distributed components.  It is, in fact, the structure `nutmeg` creates when scaffolding and developing new web components.  If you use a scaffolding mechanism other than `nutmeg` and/or create your own components from scratch, be sure that your component structure adheres to this same structure.

While the package.json file at `wuf-web-hello-world/package.json` is required for development, the package.json file at `wuf-web-hello-world/dist/package.json` is optional.  Many developers decide to publish ONLY the dist/ folder to the NPM registry and create a `package.json` file (using through the build process) specifically tailored for distribution with the built files.  They will remove the scripts section and devDependencies section of such a `package.json` file, for example.

The second option (also common) is to publish the entire web component folder, source content, test files, and all.  In this pattern the developer may decide not to create a specially tailored package.json file, and simply include the package.json file they use for development in the web component's root folder.  Refer to the [main](https://docs.npmjs.com/files/package.json#main) documentation for NPM when using this approach.  The "main" property of the componennt's root `package.json` must point to the `wuf-web-hello-world/dist/<source>.js` file. 

Either option is fine.

Build the Component
----------------------
Building the component uses webpack to generate bundle files inside the `dist/` folder.  It is this `dist/` folder that is usually published to the Artifactory NPM repository.
* Build the component from within `~/web-ui-framework/packages/wuf-web-hello-world/`: *$* `yarn build`
* Verify everything builds as expected.
* Check in the changes.

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

Publishing the component
----------------------
You do not need to manually publish your component to the NPM registry.  Your component will be published automatically via a Jenkins pipeline when your merge request into master is accepted.

* Ensure that `~/common-components/packages/wuf-web-hello-world/package.json#version` reflects the desired component version. You MUST increment the version number so that it does not conflict with any existing published version number.
* If, for any reason, you want to override the default `npm publish` behavior for your component, ensure that your component has a `publish` script in `~/common-components/packages/wuf-web-hello-world/package.json#scripts`.  If present, this script will be run in lieu of the standard `npm publish` command.  This can be helpful when you would like to, for example, publish only the contents of the dist folder, which you could accomplish by adding a script with the contents: `npm publish dist`
* Ensure that all changed files are checked in: *$* `git status`. 
  * There should be nothing outstanding
* Create a merge request for your branch.
* When the merge request is accepted, the new version of your component will be available within the Artifactory NPM registry.

Use the component in an External Angular Application
-----------------------------------------------------
Your component can only be used in external applications AFTER your work has been merged into master and the new version is automatically published to the Artifactory NPM registry via the Jenkins pipeline.  Once you have ensured that this is the case, follow the steps below to use it in your external application:

* Declare the component in the web application's package.json dependencies:  `"@anviltech/wuf-web-hello-world": "0.0.1",` and run `yarn install`.
* Alternatively, you can install from the command line: *$* `yarn add @anviltech/wuf-web-hello-world`
* Import your web component into the app by adding `import "@anviltech/wuf-web-hello-world";` to `~/web-ui-framework/scr/main.ts`.
* Not all web browsers (like Firefox) support web components natively.  Refer to the Quick Start (Minimal)'s application for examples of how to structure your `polyfill.ts`, `main.ts`, and `index.html` files to implement the proper polyfills.
* Make sure your `app.module.ts` files is using CUSTOM_ELEMENTS_SCHEMA:
  * Add `import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';` to the top of your `app.module.ts` file
  * Add the following to your @NgModule declaration:
    `schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],`
* Your web component is now ready to use in the app. Use it as you would any other component.
