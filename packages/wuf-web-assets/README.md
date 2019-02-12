Base Styles
===============

While most of the page layout for each application page is handled by layout-related components, the <body> and <html> tags are outside of the scope of any component (including those components used for layout).  These high-level elements need certain styling in order for our layouts to work as expected.  Similarly, there are some common, global styles that we want/need to apply to our application in order handle everything from base font size, line height, paragraph spacing, list decoration, etc. in a manner consistent with our style guide.</p>

Dependencies
------------
This package has some peer dependencies.  To install these dependencies, run the following commands from your application root:

```bash
npm install @angular/material@6.4.7 material-components-web@0.39.3 --save
```

or

```bash
yarn add @angular/material@6.4.7 material-components-web@0.39.3
```

Installation
-------------------------------------
In order to easily apply these high-level, global styles we have created a collection of such styles and provided them for use from the library of components via a single SCSS file import.  To use it, add the `@anviltech/wuf-web-assets` package to your application by running the following command from your command line:

```bash
$ npm install @anviltech/wuf-web-assets
```

... then add the following to your application's `style.scss` file:

```typescript
@import "~@anviltech/wuf-web-assets/src/assets/styles/library”;
```

This @import will bring all of the base styles from the Common Components Library into your app and provide the following benefits:
* Reset the styling of many HTML elements to baseline for consistency across browsers (using a flavor of normalize.css).</li>
* Provide a number of SCSS utility functions and mixins, including some for responsive breakpoints.</li>
* Provide a number of convenience classnames, including some for handling flex-box layouts.</li>
* Create a default theme and brand style.  Read more about theming and brand overrides in the <a routerLink="/themes">Branding &amp; Themes</a> section.</li>

There are some assets from `@anviltech/wuf-web-assets` that must be copied from the `node_modules` folder into your local application's asset folder so that your application can use them.  Add the following line to your application's `angular.json` file:
```typescript
    "assets": [
          "src/assets",
          {
            "glob": "**/*",
            "input": "node_modules/@anviltech/wuf-web-assets/assets/images",
            "output": "/assets/anviltech/wuf-web-assets/images"
          }
      ]
```

This will create a `assets/anviltech` folder inside your application's bundle.  You wont see it in your app's file tree, but this folder will be included in your bundle by the Angular compiler at application build time.  Assets inside `assets/anviltech` will now be available for use throughout your application using a file path like:

```html
<link rel="shortcut icon" href="assets/anviltech/wuf-web-assets/images/favicons/favicon.ico">
```
