/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

const fs = require("fs");
const makedirp = require("mkdirp");
const rimraf = require("rimraf");

let devServerTempFolder = __dirname + "/../tmp";
let devServerRunningConfig = devServerTempFolder + "/runningServer.json";

/**
 * @class
 *
 * Class for reading and manipluating the current running server's configuration.
 */
class RunningServiceConfig {

    /**
     * Configuration folder where configuration is stored.
     */
    static get devServerTempFolder () {
        return devServerTempFolder;
    }

    /**
     * Pass into @link{RunningServiceConfig.getRunningConfig} and @link{RunningServiceConfig.setRunningConfig}, to get/set the service portion of the configuration.
     */
    static get SERVICE_CONFIG_SECTION_NAME () {
        return "uiConfigServer";
    }

    /**
     * Pass into @link{RunningServiceConfig.getRunningConfig} and @link{RunningServiceConfig.setRunningConfig}, to get/set the database portion of the configuration.
     */
    static get DATABASE_CONFIG_SECTION_NAME () {
        return "uiConfigDatabase";
    }

    static _createDirectory () {
        if (!fs.existsSync(devServerTempFolder)) {
            makedirp.sync(devServerTempFolder);
        }
    }

    static _doesConfigFileExist () {
        return fs.existsSync(devServerRunningConfig);
    }

    static _getConfigFileContents () {
        return new Promise((resolve, reject) => {
            return fs.readFile(devServerRunningConfig, "utf8", function (err, data) {
                if (err) {
                    reject(err);
                }

                resolve(JSON.parse(data));
            });
        });
    }

    static _writeConfigFile(data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(devServerRunningConfig, JSON.stringify(data), "utf8", function (err) {
                if (err) {
                    reject("Error saving runnning config: " + err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    /**
     * Returns if there is a config file.
     *
     * @returns {boolean} True if running, false if not.
     */
    static isRunning () {
        return RunningServiceConfig._doesConfigFileExist();
    }

    /**
     * Gets the running configuration for the database or service.
     *
     * @param {string} section Section of the config to get: Service config or database config.
     * @returns {Promise} Promise that is resolved with the config file is loaded. The config data will be passed into the promise.
     * @throws Throws error if the service is not running.
     */
    static getRunningConfig (section) {
        if (RunningServiceConfig.isRunning()) {
            return RunningServiceConfig._getConfigFileContents()

                .then((config) => {
                    return config[section];
                });
        } else {
            throw "Config service is not running, to start config service run 'startUiConfigServer'.";
        }
    }

    /**
     * Sets the running configuration for the database or service.
     *
     * @param {string} section The section of the config to set: Service config or database config.
     * @param {Object|NULL} data The data to set. If null the section is completely removed from the config.
     * @returns {Promise} Resolved when the data is written to the config file.
     */
    static setRunningConfig (section, data) {

        return new Promise((resolve, reject) => {
            new Promise((resolve, reject) => {
                if (!RunningServiceConfig._doesConfigFileExist()) {
                    RunningServiceConfig._createDirectory();
                    resolve({});
                } else {
                    RunningServiceConfig._getConfigFileContents()
                        .then(resolve)
                        .catch(reject);
                }
            })

            .then((fileData) => {
                if (data == null) {
                    delete fileData[section];
                } else {
                    fileData[section] = data;
                }

                return fileData;
            })

            .then((fileData) => {
                return RunningServiceConfig._writeConfigFile(fileData);
            })

            .then(resolve)

            .catch(reject);
        });
    }

    /**
     * Deletes the config file.
     *
     * @returns {Promise} Resolved when the config file is removed.
     */
    static clearRunningConfig () {
        return new Promise((resolve, reject) => {
            rimraf(devServerTempFolder, function (err) {
                if (err) {
                    reject(err);
                }

                resolve();
            });
        });
    }

}

module.exports = RunningServiceConfig;
