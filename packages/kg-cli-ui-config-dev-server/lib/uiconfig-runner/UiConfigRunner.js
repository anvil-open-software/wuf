/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

const UiConfigDatabase = require("./UiConfigDatabase");
const DockerRunner = require("../docker-runner/DockerRunner");
const RunningServiceConfig = require("../RunningServiceConfig");
const net = require("net");
const fs = require("fs");

/**
 * @class
 *
 * Creates a running instace of the ui config service.
 */
class UiConfigRunner {

    /**
     * @constructor
     */
    constructor (options) {

        options = options || {};

        this.dockerImage = options.dockerImage || "ui-config-service:1.0.0-SNAPSHOT";

        this.uiConfigTempFolder = RunningServiceConfig.devServerTempFolder + "/ui-config";

        this.uiConfigDocker = new DockerRunner();
        this.provisionDocker = new DockerRunner();
    }

    /**
     * Starts the service.
     *
     * @param {UiconfigDatabase} uiConfigDatabase Database instace to connect the service to.
     *
     * @returns {Promise} Resolved when the service is running and configured. Rejected if any errors occur.
     */
    startUiConfig (uiConfigDatabase) {

        this.uiConfigPort = this._findUnusedPort();

        return new Promise((resolve, reject) => {
            this._provisionDatabase(uiConfigDatabase)
                .then(this._startConfigService.bind(this))
                .then(((containerId) => { return this._saveRunningConfig(containerId, uiConfigDatabase); }).bind(this))
                .then(resolve)
                .catch(reject);
        });
    }

    /**
     * Attaches to the running ui service.
     *
     * @returns {Promise} Resolved when successfully attached to the running service container. Rejected if we cannot attach.
     */
    attachUiConfig () {
        return new Promise((resolve, reject) => {
            if (RunningServiceConfig.isRunning()) {
                RunningServiceConfig.getRunningConfig(RunningServiceConfig.SERVICE_CONFIG_SECTION_NAME)

                    .then(((uiServiceConfig) => {
                        this.dockerImage = uiServiceConfig.dockerImage;
                        this.uiConfigTempFolder = uiServiceConfig.configFolder;
                        this.uiConfigPort = uiServiceConfig.port;
                        this.uiConfigDocker
                            .attach(uiServiceConfig.dockerContainerId)
                            .then(resolve)
                            .catch(reject);
                    }).bind(this))

                    .catch(reject);
            } else {
                reject("Cannot find service to attach to.");
            }
        });
    }

    _saveRunningConfig(containerId, uiConfigDatabase) {

        return new Promise((resolve, reject) => {

            RunningServiceConfig.setRunningConfig(RunningServiceConfig.SERVICE_CONFIG_SECTION_NAME, {
                dockerImage: this.dockerImage,
                dockerContainerId: containerId,
                configFolder: this.uiConfigTempFolder,
                port: this.uiConfigPort
            })

            .then((() => {
                resolve(this);
            }).bind(this))

            .catch(reject);
        });
    }

    /**
     * Runs the provisioning scripts in the ui config docker, against the database container.
     *
     * @param {UiconfigDatabase} uiConfigDatabase Database instace to provision.
     *
     * @returns {Promise} Returns a Promise that is resolved when the database is provisioned, and rejected if there is an error.
     */
    _provisionDatabase(uiConfigDatabase) {
        return new Promise((resolve, reject) => {
            this.provisionDocker.run(this.dockerImage, {
                entrypoint: "./db/create_db.sh",
                env: [{
                    name: "DB_TYPE",
                    value: "hsqldb"
                }, {
                    name: "DB_HOST",
                    value: uiConfigDatabase.getHost()
                }, {
                    name: "DB_NAME",
                    value: uiConfigDatabase.getName()
                }, {
                    name: "DB_USER",
                    value: uiConfigDatabase.getUser()
                }, {
                    name: "DB_PASSWORD",
                    value: uiConfigDatabase.getPassword()
                }],
                waitForEnd: true,
                timeoutMs: 0
            })
            .then(() => { /* Consume the container id so the final then only gets an argument when there is an error. */ })
            .catch((err) => {
                return err;
            })
            .then(((err) => {
                this.provisionDocker.stop();

                if (err) {
                    reject(err);
                } else {
                    resolve(uiConfigDatabase);
                }
            }).bind(this));
        });
    }

    _startConfigService (uiConfigDatabase) {
        this._createConfigPropertiesFiles(
            uiConfigDatabase.getHost(),
            uiConfigDatabase.getName(),
            uiConfigDatabase.getUser(),
            uiConfigDatabase.getPassword()
        );

        return this.uiConfigDocker.run(this.dockerImage, {
            ports: [{
                hostPort: this.uiConfigPort,
                exposePort: 80
            }],
            volumes: [{
                hostFolder: this.uiConfigTempFolder,
                containerFoler: "/opt/dematic"
            }]
        });
    }

    /**
     * Stops the running service.
     *
     * @returns {Promise} Resolved when the serivce is shutdown.
     */
    stopUiConfig () {
        return this.uiConfigDocker.stop()

            .then(() => {
                return RunningServiceConfig.setRunningConfig(RunningServiceConfig.SERVICE_CONFIG_SECTION_NAME, null);
            });
    }

    /**
     * @private
     * Find an unused port to use.
     */
    _findUnusedPort () {
        let server = new net.Server();

        server.listen(0);

        let port = server.address().port;

        server.close();

        return port;
    }

    _createConfigPropertiesFiles(dbHost, dbName, dbUser, dbPassword) {
        if (!fs.existsSync(this.uiConfigTempFolder)){
            fs.mkdirSync(this.uiConfigTempFolder);
        }

        fs.writeFileSync(
            this.uiConfigTempFolder + "/config.properties",
            "spring.datasource.url=jdbc:hsqldb:hsql://" + dbHost + "/" + dbName + "\n" +
            "spring.datasource.username=" + dbUser + "\n" +
            "spring.datasource.password=" + dbPassword + "\n" +
            "spring.datasource.driverClassName=org.hsqldb.jdbcDriver\n"
        );
    }
}

module.exports = UiConfigRunner;
