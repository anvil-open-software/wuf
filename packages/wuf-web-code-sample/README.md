&lt;wuf-code-sample&gt;
====

Install
----

* Declare the component in the web application's package.json dependencies:  `"@anviltech/wuf-hello-world": "0.0.1",` and run `npm install`.
* Alternatively, you can install from the command line: *$* `npm install @anviltech/wuf-hello-world`
* Import your web component into the app by adding `import "@anviltech/wuf-hello-world";` to `~/web-ui-framework/scr/main.ts`.
* Not all web browsers (like Firefox) support web components natively.  To support all evergreen browsers (including Firefox), make sure to load the `webcomponents-lite.js` polyfill to your app's index.html page: <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.22/webcomponents-lite.js"></script>
* Make sure your `app.module.ts` files is using CUSTOM_ELEMENTS_SCHEMA:
  * Add `import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';` to the top of your `app.module.ts` file
  * Add the following to your @NgModule declaration:
    `schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],`
* Your web component is now ready to use in the app. Use it as you would any other component.

Alternative polyfill tags if you need them.

```
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-sd-ce.js"></script>
<script nomodule src="https://unpkg.com/browser-es-module-loader@latest/dist/babel-browser-build.js"></script>
<script nomodule src="https://unpkg.com/browser-es-module-loader@latest/dist/browser-es-module-loader.js"></script>
```
