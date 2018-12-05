# Ui Config Webpack Plugin

This plugin provides a couple variables for adding a Ui Config server into your application.

## Prerequisites

- html-webpack-plugin: https://github.com/jantimon/html-webpack-plugin

## Using the plugin

Add the plugin to your plugins section of webpack.config.js:

```javascript
const CssVariablesPlugin = require('@kion/kg-webpack-ui-config-plugin');

...

module.exports = {

    ...

    "plugins": [
        ...

        new CssVariablesPlugin({
            useDevServer: true|false,
            server: "Optional: http://serverlocation:port"
        })

        ...
    ]

    ...
};
```

Set 'useDevServer' to true if using package '@kion/kg-cli-ui-config-dev-server'. If using the ui config dev server, 'server' is ignored even if filled in.
If not using the ui config dev server you must specify a ui config server location in 'server'.

Durring a webpack build, or webpack dev server start the plugin will run and provide the following variables for access in your index.html.

- htmlWebpackPlugin.options.cssVariablesUrl <br />
  The url to access the css variables from. The server will be the dev ui config server if options.useDevServer is true, otherwise it will use options.server.
- htmlWebpackPlugin.options.cssVariablesHtmlLink <br />
  An html link tag with the href set to 'cssVariablesUrl'. This will also have the ID set so the authorization automagically injects the tenant.

To use these variables use the underscore templates in your index.html:

Inject the link for you
```html
<head>
    <%= htmlWebpackPlugin.options.cssVariablesHtmlLink %>
</head>
```

Create your own link
```html
<head>
    <link href="<%= htmlWebpackPlugin.options.cssVariablesUrl %>" />
</head>
```

If you use 'cssVariablesHtmlLink' it will setup the link tag so the core ui framework can inject the tenant id for tenenat themeing.