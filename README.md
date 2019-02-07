Installation & Development of the Web UI Framework (WUF)
====================================================
The WUF is comprised of the following 2 repos:
1. [Web UI Framework (WUF)](https://github.com/anvil-open-software/wuf) (this repo)
2. [Quick Start App](https://github.com/anvil-open-software/wuf-quick-start)

### WUF
The [WUF](https://github.com/anvil-open-software/wuf) repo (this repo) includes two important collections:
1. **Library of Components**. A library of home-built Polymer, Web Component, and Angular packages, each published to the NPM registry using the @anviltech scope.
2. **Living Style Guide**. All documentation related to the usage, design patterns, setup, and development of the Quick Start Applications (Minimal and Complete), the Library of Components, and WUF in general.  The Living Style Guide is intended to be developed alongside the Library of Components and is included in the same repo with the Library to reinforce this relationship.  The Living Style Guide is "living" in that it remains up to date at all times because it is updated as the components themselves are updated.

### Quick Start
The Quick Start app is intended to be used as a baseline, plain-vanilla application for quickly creating a new web-based application from scratch.

The minimal version of the Quick Start application is the most basic and makes no assumptions about any other technology, including the backend. This version allows the developers to start with a bare-bones version of the application that is compatible with any backend, datastore, or services.

Installation and Setup
-----------------------
In order to develop components for WUF and/or view the Living Style Guide locally, each developer must install a local version of WUF (this repo).

The setup process for WUF includes the following steps, in order.  Additional details about each step follows below.

1. Set up your development environment and install dependencies
2. Clone WUF
3. Bootstrap WUF

### 1. Set Up Your Development Environment
Follow the steps below to set up your development environment and install dependencies.

#### Dependencies
The following are dependencies for WUF development:
* [Node.js](https://nodejs.org/en/) version 8.0.0 or greater, installed globally - A JavaScript runtime built on Chrome's V8 JavaScript engine. 
* [Yarn](https://yarnpkg.com/en/) version 1.10.0 or greater, installed globally - A dependency management system that replaces NPM.  Yarn is required over NPM for WUF development because of WUF's dependency on Yarn Workspaces for inter-linking package dependencies.  Do not use NPM with WUF because it has the potential to conflict with Yarn and cause problems.
* [Angular](https://angular.io/guide/quickstart) version 6.1.0 or greater, installed globally - This is installation includes Angular-CLI.
* [Typescript](https://www.typescriptlang.org/) version 2.9.2 or greater, installed globally - Typescript is a typed superset of JavaScript that compiles to plain JavaScript and it is the language in which all of our Angular application development is done.

#### Configure NPM to Access the Dematic Artifactory NPM Registry
In order for your NPM command line client to work with Artifactory you will first need to set up your `.npmrc` file with the necessary credentials. For getting authentication details run the following command:

```bash
$ curl -u "your KION username:your KION password" "https://artifactory.dematic.com/artifactory/api/npm/npm-local/auth/kion"
```

or you can use this powershell script on windows:

```bash
Invoke-WebRequest -Credential (Get-Credential) "https://artifactory.dematic.com/artifactory/api/npm/npm-local/auth/kion" | Select-Object -ExpandProperty Content
```

The response should be pasted in the `~/.npmrc` (in Windows `%USERPROFILE%/.npmrc`) file, as follows:
```text
ca=
strict-ssl=false
@anviltech:registry=https://artifactory.dematic.com/artifactory/api/npm/npm-local/
//artifactory.dematic.com/artifactory/api/npm/npm-local/:_password=<your encoded password>
//artifactory.dematic.com/artifactory/api/npm/npm-local/:username=luvaas
//artifactory.dematic.com/artifactory/api/npm/npm-local/:email=Darren.Luvaas@dematic.com
//artifactory.dematic.com/artifactory/api/npm/npm-local/:always-auth=true
```

***NOTE:*** If the port number (:443) appears in the output, be sure to remove the port numbers or you will get authentication errors.

***NOTE:*** Because the values for the password property will change when your corporate password changes (i.e., every 90 days), you will need to run the above command whenever your corporate password changes and update your .npmrc file accordingly.

### 2. Clone WUF
1. Clone [WUF](https://github.com/anvil-open-software/wuf).
2. After cloning WUF `cd` to the repo root folder (`~/wuf`)
3. Run the following command:

### 3. Bootstrap WUF
Run the following commands to boostrap WUF:

```bash
yarn bootstrap
```

**NOTE:** The bootstrap script may take a while when run the first time.  

WUF is comprised of a main application (Angular refers to this as a "workspace" application) -- which is used for the Living Style Guide -- and a collections of "projects" (a host folder for Angular-based library components) and "packages" (a host folder for Polymer, web components, and other helper packages).  The `yarn bootstrap` command will perform the following activities:
* Perform a dependency installation (i.e., a 'yarn install') for the workspace application and all of the children projects and packages.  This is **much** faster than manually performing dependency installation for all of these items individually.  
* Inter-link child packages that depend on one another.  This makes development significantly easier because you can update and develop individual packages that depend on other packages within WUF without having to publish those packages until they are ready.  You simply declare a dependency in a local package on another local package as you normally would, and Yarn figures out the relationship and links those packages together.  For more information on component development, read the `angularcomponents-README.ts` file.
* Build each of the packages and projects and create corresponding `dist` folders.

Once the above steps are completed, the Style Guide app should now be ready to run (see below).

Running WUF and viewing the Living Style Guide
----------------------------------------------
To start the Living Style Guide application issue the following:

```bash
yarn start
```

The above command will run the Living Style Guide application in AOT mode.  In Angular v5 and greater, AOT mode (production mode) is nearly as fast as JIT mode (dev mode) and will eventually become the new default run mode for Angular. Because AOT mode is so highly opinionated it will often fail where JIT mode will not so it's important to make sure our app is always compatible with AOT mode.  Therefore, we have set our `yarn start` script to run in AOT mode. 

If you really, really want to run in JIT mode for whatever reason, you can use the following command in lieu of the above (this is **NOT** recommended):

```bash
$ ng serve
```

If you encounter errors during an AOT compile while you are developing, you'll need to go back to your work to fix any issues before issuing a merge request.  Merge requests that fail to build in AOT mode will be rejected.

You can now visit the Style Guide application locally at [http://localhost:4200/](http://localhost:4200/).

The Living Style Guide in Action
--------------------------------
The purpose of the Living Style Guide is to document the usage of the Library of Components.  It is imperative that after changes and additions to the Library of Components are made instructions are added/updated within the Living Style Guide.  Without making those updates here, your component development work isn't complete.

Another good reason for keeping the Living Style Guide in the same repo as the Library of Components in your development environment, is that you can also see your component in action within a real, functioning application.

For more information on component development within WUF, read the `angularcomponents-README.ts` file.

### Document your New Component
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

### Perform Integration Testing
Be sure to write e2e tests for your components within the Living Style Guide.  Doing so helps ensure that your new component works as expected within a consuming application.

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Increment Version Number
------------------------
After making your changes to WUF, increment its version number in:
`~/web-ui-framework/package.json`

Also be sure to update the CHANGELOG.md files accordingly:
`~/web-ui-framework/CHANGELOG.md`

Issue a Merge Request for Master
--------------------------------
After all of your changes are complete and local tests have passed, issue a merge request to master within this gitlab repo at [https://github.com/anvil-open-software/wuf](https://github.com/anvil-open-software/wuf).  

Once your merge has been reviewed and accepted, the Jenkins pipeline will automatically run integration tests and publish all of the projects and packages to the (Artifactory registry)[https://artifactory.dematic.com/artifactory/webapp/#/artifacts/browse/tree/General/npm-local/@anviltech/].

Continuous Deployment
======================
The Living Style Guide was built to run inside a Docker image and served with nginx as part of a continuous deployment workflow.

While deployment will typically happen via a Jenkins workflow, you can also build and test the Docker image locally using the following commands.

### Dependencies
* [Docker](https://www.docker.com/)

### Build Docker Image
```bash
docker build -t web-ui-framework:prod .
```

### Run Docker in Development Mode
```bash
docker run -p 80:80 web-ui-framework:dev
```

### Run Docker in Production Mode
```bash
docker run -p 80:80 web-ui-framework:prod
```

### View App
View the running Docker image in your browser at [http://localhost](http://localhost)
