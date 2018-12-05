/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

const DockerRunner = require("../docker-runner/DockerRunner");
const os = require("os");
const RunningServiceConfig = require("../RunningServiceConfig");


/**
 * @typedef {Object} UiconfigDatabase~Options
 * @property {number} [options.databasePort=9001] Database port to listen on.
 * @property {number} [options.databaseName=ui-config] Set the name of the database.
 * @property {number} [options.databaseUser=uiConfigUser] Set the default user of the database.
 * @property {number} [options.databasePassword=secret] Set the default password for the default user of the database.
 */

/**
 * @class
 *
 * Starts an HSQL database for the ui config to run against.
 */
class UiConfigDatabase {

    /**
     * @constructor

     */
    constructor() {
        this.databaseContainer = new DockerRunner();
    }

    /**
     * @private
     * Finds the first external facing interface with 1 ipv4 address on it.
     */
    _getHostExternalIpv4Address() {
        let ifaces = os.networkInterfaces();
        let foundIpAddress = null;
        let dockerNatIpAddress = null;

        Object.keys(ifaces).some(function (ifname) {
            let ifaceAddresses = ifaces[ifname];
            let foundIpAddresses = [];

            if (ifname.indexOf("Docker") != -1) {

            }

            ifaceAddresses.some(function (ifaceAddress) {
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                if ('IPv4' !== ifaceAddress.family || ifaceAddress.internal !== false) {
                    return false;
                }

                foundIpAddresses.push(ifaceAddress.address);

                if (foundIpAddresses.length > 2) {
                    return true;
                }
            });

            // We only want interfaces with 1 ipv4 address to minimize weird network behaviour.
            if (foundIpAddresses.length === 1) {
                // We will prefer the docker if since we are networking between docker containers.
                if (ifname.indexOf("Docker") != -1) {
                    dockerNatIpAddress = foundIpAddresses[0];
                } else {
                    foundIpAddress = foundIpAddresses[0];
                }
            }
        });

        if (!dockerNatIpAddress || !foundIpAddress) {
            throw "Unable to determine local ip address, so we don't know where to connect to the database.";
        }

        console.log("Found local ip address: " + dockerNatIpAddress || foundIpAddress);

        return dockerNatIpAddress || foundIpAddress;
    }

    /**
     * Attaches to an already running database.
     * Uses the running config to get the container id.
     *
     * @returns {Promise} Promise that is resolved when the container is attached.
     */
    attachDatabase() {
        return new Promise((resolve, reject) => {
            if (RunningServiceConfig.isRunning()) {
                RunningServiceConfig.getRunningConfig(RunningServiceConfig.DATABASE_CONFIG_SECTION_NAME)

                    .then((function (databaseConfig) {

                        this.databaseImageName = databaseConfig.dockerImage;
                        this.dbHost = databaseConfig.dbHost;
                        this.dbName = databaseConfig.dbName;
                        this.dbUser = databaseConfig.dbUser;
                        this.dbPassword = databaseConfig.dbPassword;
                        this.databaseContainer
                            .attach(databaseConfig.dockerContainerId)
                            .then(resolve)
                            .catch(reject);

                    }).bind(this))

                    .catch(reject);
            } else {
                reject("Cannot find database docker container to attach to.");
            }
        });
    }

    /**
     * Starts the database container.
     *
     * @param {string} uiConfigDockerImageName
     * @param {UiconfigDatabase~Options} options
     * @returns {Promise} Returns a promise that resolves when the database is spawned, and rejects if the database start errors.
     */
    startDatabase(options) {
        this.databaseImageName = "blacklabelops/hsqldb:latest";

        let tmpOptions = options || {};
        this.exposePort = tmpOptions.databasePort || 9001;
        this.dbHost = this._getHostExternalIpv4Address() + ":" + this.exposePort;
        this.dbName = tmpOptions.databaseName || "ui-config";
        this.dbUser = tmpOptions.databaseUser || "uiConfigUser";
        // If running sql queries against the database the password has to be blank.
        //  The SQLTool built into the container will not allow passwords to be provided through the command line.
        this.dbPassword = ""; // tmpOptions.databasePassword ||

        this.dockerEnvironmentVariables = [{
            name: "HSQLDB_DATABASE_ALIAS",
            value: this.dbName
        }, {
            name: "HSQLDB_USER",
            value: this.dbUser
        }, {
            name: "HSQLDB_PASSWORD",
            value: this.dbPassword
        }];

        if (this.databaseContainer && this.databaseContainer.isRunning()) {
            return new Promise((resolve) => { resolve(); });
        }

        return new Promise((resolve, reject) => {
            this.databaseContainer
                .run(this.databaseImageName, {
                    ports: [{
                        hostPort: this.exposePort,
                        exposePort: this.exposePort
                    }],
                    env: this.dockerEnvironmentVariables
                })
                /*
                .then((containerId) => {
                    let dbCheckInterval = setInterval(() => {
                        if (this.isDatabaseIsRunningInsideContainer()) {
                            clearInterval(dbCheckInterval);
                        }
                    }, 1000);

                    return containerId;
                })
                */
                .then(((containerId) => {
                    return this._saveRunningConfig(containerId);
                }).bind(this))
                .then(resolve)
                .catch(reject);
        });
    }

    /**
     * Executes an sql statement against the database. Must be INSERT/UPDATE/DELETE.
     *
     * @param {string} sqlStatement Sql statement(s) to execute. Split multiple statements with ';'.
     *
     * @return {Promise} Resolved when sql statement is run. Rejected on error.
     */
    runSqlStatement(sqlStatement) {
        if (!this.databaseContainer || !this.databaseContainer.isRunning()) {
            return Promise.reject("Database is not running.");
        }

        return this.databaseContainer.execute("java", [
            "-jar",
            "/opt/hsqldb/sqltool.jar",
            "--inlineRc=url=jdbc:hsqldb:hsql://localhost/" + this.getName() + ",user=" + this.getUser() + ",password=",
            "--sql=" + sqlStatement
        ], 0);
    }

    _saveRunningConfig(containerId) {

        return new Promise((resolve, reject) => {

            RunningServiceConfig.setRunningConfig(RunningServiceConfig.DATABASE_CONFIG_SECTION_NAME, {
                dockerImage: this.databaseImageName,
                dockerContainerId: containerId,
                dbHost: this.dbHost,
                dbName: this.dbName,
                dbUser: this.dbUser,
                dbPassword: this.dbPassword
            })
            .then((() => { resolve(this); }).bind(this))
            .catch(reject);
        });
    }

    /**
     * Stops the running database if it is running.
     *
     * @returns {Promise} Promise that is resolved when the database is stopped.
     */
    stopDatabase() {
        return this.databaseContainer.stop()
            .then(() => {
                return RunningServiceConfig.setRunningConfig(RunningServiceConfig.DATABASE_CONFIG_SECTION_NAME, null);
            });
    }

    /**
     * Returns if the database in the container is accepting connections.
     *
     * @returns {boolean} True is the database is running, false if it not running.
     */
    isDatabaseIsRunningInsideContainer() {
        return true;
    }

    /**
     * Get the host ip the database is listening on (Local machine ip).
     *
     * @returns {string} Returns the local ip the database is listening on.
     */
    getHost() {
        return this.dbHost;
    }

    /**
     * Gets the name of the running database.
     *
     * @returns {string} The name of the database.
     */
    getName() {
        return this.dbName;
    }

    /**
     * Gets the username of the running database.
     *
     * @returns {string} The username of the database.
     */
    getUser() {
        return this.dbUser;
    }

    /**
     * Gets the username's password of the running database.
     *
     * @returns {string} The username's password of the database.
     */
    getPassword() {
        return this.dbPassword;
    }
}


module.exports = UiConfigDatabase;
