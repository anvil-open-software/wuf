/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

const configDevServer = require("@kion/kg-cli-ui-config-dev-server");

/**
 * @class
 *
 * <p>
 * Html web pack plugin that exposes 2 template variables for adding dynamic css variables to your index.html. <br />
 * <br />
 * Variables you can access in index.html.<br />
 * <br />
 * htmlWebpackPlugin.options.cssVariablesUrl: <br />
 *  - The url to access the css variables from. The server will be the dev ui config server if options.useDevServer is true, otherwise it will use options.server.<br />
 * <br />
 * htmlWebpackPlugin.options.cssVariablesHtmlLink: <br />
 *  - An html link tag with the href set to 'cssVariablesUrl'. This will also have the ID set so the authorization automagically injects the tenant.<br />
 * <br />
 * The plugin will fail if options.useDevServer is true and the dev server isn't running.<br />
 * </p>
 * @param {Object} options
 * @param {boolean} options.useDevServer Use the dev server that has been started. Note: 'yarn run startUiConfigServer' must have been run.
 * @param {boolean} options.server The server to use when adding the link.
 */
function CssVariablesPlugin(options) {
    this.useDevServer = false;
    this.server = "";

    if (options) {

        this.useDevServer = options.useDevServer ? true : false;

        if (!this.useDevServer && options.server) {
            this.server = options.server;
        }
    }
}

CssVariablesPlugin.prototype.apply = function (compiler) {
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-before-html-generation', function (htmlPluginData, callback) {

            new Promise((resolve, reject) => {
                if (this.useDevServer) {
                    let devServerRunningConfig = configDevServer.RunningServiceConfig;

                    if (devServerRunningConfig.isRunning()) {
                        devServerRunningConfig.getRunningConfig(devServerRunningConfig.SERVICE_CONFIG_SECTION_NAME)
                            .then((uiServiceConfig) => {
                                console.log("Found ui config service running on port: " + uiServiceConfig.port);
                                resolve("http://localhost:" + uiServiceConfig.port);
                            })

                            .catch(reject);
                    } else {
                        reject("Ui config service isn't running. Run 'npm|yarn run startUiConfigServer' to start.");
                    }
                } else {
                    resolve(this.server);
                }
            })

                .then((server) => {
                    let cssVariablesUrl = server + "/api/v1.0/resources/css-variables";

                    htmlPluginData.plugin.options.cssVariablesUrl = cssVariablesUrl;
                    htmlPluginData.plugin.options.cssVariablesHtmlLink = "<link id=\"cssVariablesLink\" rel=\"stylesheet\" type=\"text/css\" href=\"" + cssVariablesUrl + "\" />";
                    callback(null, htmlPluginData);
                })

                .catch((err) => {
                    callback(err, null);
                });
        }.bind(this));
    }.bind(this));
};

module.exports = CssVariablesPlugin;
