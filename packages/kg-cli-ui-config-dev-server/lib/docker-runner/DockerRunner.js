/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

let DockerHost = require("dockerode");

/**
 * @class
 *
 * Runs a docker image.
 */
class DockerRunner {

    /**
     * @constructor
     */
    constructor() {
        this.dockerHost = new DockerHost();
    }

    /**
     * Attaches to an already started container.
     *
     * @param {string} containerId Id of conatiner to attach to.
     * @returns {Promise} Promise that is resolved after attached to a container. Rejected if the container doesn't exist.
     */
    attach(containerId) {
        this.container = this.dockerHost.getContainer(containerId);

        return new Promise((resolve, reject) => {
            this.container.inspect()
                .then((containerData) => {
                    this.latestContainerState = containerData;
                    resolve();
                })
                .catch((err) => {
                    reject(reject);
                });
        });
    }

    /**
     * Starts a docker container.
     *
     * @param {string} imageName Docker image to run.
     * @param {Object} options Options for starting the docker image.
     * @param {string} [options.host=Platform Specific] The docker socket or docker engine host to connect to.
     * @param {string} [options.entrypoint] Provide a different entrypoint for the docker image.
     * @param {Object[]} [options.ports] Sets the port mapping for the docker container.
     * @param {number} [options.ports[].hostPort] Port to bind to on the host.
     * @param {number} [options.ports[].exposePort] Port that is exposed in the docker image.
     * @param {Object} [options.env[]] Sets the environment variables in the docker image.
     * @param {string} [options.env[].name] The name of the environment variable to set.
     * @param {string} [options.env[].value] The value of the environment variable to set.
     * @param {Object[]} [options.volumes] Sets the volume mappings for the docker container.
     * @param {number} [options.volumes[].hostFolder] Folder on the host to map.
     * @param {number} [options.volumes[].containerFoler] Folder in the docker image to map to.
     * @param {boolean} [options.waitForEnd = false] -
     *  True: Returned promise is resolved when the container exits. It is rejected if a non 0 status code is returned from the container. <br />
     *  False: Returned promise is resolved when the container spawns.
     * @param {number} [options.timeoutMs = 60000] Amount of time to wait for the container to exit, when wait for end is true. 0 = never.
     *
     * @returns {Promise} Resolved when the container spawns. If waitForEnd is true then resolved when container exits. Rejected when an error occurs or timeout is reached.
     */
    run(imageName, options) {

        if (this.isRunning()) {
            throw "Container is already running";
        }

        if (typeof(imageName) != "string" || imageName == "") {
            throw "Invalid image name: " + imageName;
        }

        this.imageName = imageName;

        this.dockerOptions = {
            Image: this.imageName,
            AttachStdin: false,
            AttachStdout: options && options.waitForEnd,
            AttachStderr: options && options.waitForEnd
        };

        if (options) {
            if (options.ports && options.ports.forEach) {
                this.dockerOptions.HostConfig = {
                    PortBindings: {}
                };

                options.ports.forEach((portMapping) => {
                    this.dockerOptions.HostConfig.PortBindings[portMapping.exposePort + "/tcp"] = [{ HostPort: portMapping.hostPort + "" }];
                })
            }

            if (options.volumes && options.volumes.forEach) {
                this.dockerOptions.HostConfig = this.dockerOptions.HostConfig || {};

                this.dockerOptions.HostConfig.Binds = [];

                options.volumes.forEach((volumeMapping) => {
                    this.dockerOptions.HostConfig.Binds.push(volumeMapping.hostFolder + ":" + volumeMapping.containerFoler);
                })
            }

            if (options.env && options.env.forEach) {
                this.dockerOptions.Env = [];

                options.env.forEach((envVar) => {
                    this.dockerOptions.Env.push(envVar.name + "=" + envVar.value);
                });
            }

            if (options.entrypoint) {
                this.dockerOptions.Entrypoint = options.entrypoint;
            }
        }

        return new Promise((resolve, reject) => {
            let self = this;
            self.dockerHost.createContainer(self.dockerOptions)

                .then((container) => {
                    self.container = container;
                    return container.start();
                })

                .then((container) => {
                    // Handle container start and wait if option is set.
                    if (options && options.waitForEnd) {
                        if (options && options.timeoutMs > 0) {
                            setTimeout(() => {
                                container.stop()
                                    .then(() => {
                                        return container.remove();
                                    }).then(() => {
                                        reject("Container failed to finish within " + timeoutMs / 1000.0 + " seconds.");
                                    }).catch((err) => {
                                        reject("Error stopping container after timeout. Error: " + err);
                                    });
                            }, options.timeoutMs);
                        }

                        return container.wait();
                    }

                    return container;
                })

                .then(() => {
                    // Get the latest container status.
                    return self.container.inspect();
                })

                .then((containerData) => {
                    self.latestContainerState = containerData;
                    // Check the status if not running then we remove the container.
                    if (!containerData.State.Running) {
                        // If there is a non 0 status code send a rejection.
                        if (containerData.State.ExitCode != 0) {
                            reject("Container exited with non 0 status code.");
                        }
                    }

                    return self.container;
                })

                .then((() => {
                    // Finally return the container id.
                    resolve(this.container.id);
                }).bind(this))

                .catch((err) => {
                    reject(err);
                });
        });
    }

    /**
     * Executes a command against the running container.
     *
     * @param {string} command The command to run.
     * @param {string[]} args Arguments to the command.
     * @param {number} [timeoutMs = 60000] Amount of time to wait for the command to execute, 0 = never.
     *
     * @returns {Promise} Resolved when the executing is done. Rejected if there non-zero is returned, a timeout occurs, or docker engine reports an error.
     */
    execute(command, args, timeoutMs) {

        if (!this.isRunning()) {
            throw "Container must be running to execute a statement against it.";
        }

        if (!command || command == "") {
            throw "Must specify a command to run.";
        }

        let execOptions = {
            AttachStdin: false,
            AttachStdout: true,
            AttachStderr: true,
            Tty: true,
            Cmd: [
                command
            ]
        };

        Array.prototype.push.apply(execOptions.Cmd, args);

        return new Promise((resolve, reject) => {
            let executeTimeMs = 0;
            let waitIntervalMs = 1000;

            let testExecFinished = function (exec) {
                exec.inspect()

                    .then((data) => {
                        if (data.Running) {
                            if (timeoutMs && timeoutMs > 0) {
                                if (executeTimeMs >= timeoutMs) {
                                    reject("Exec command timed out.");
                                } else {
                                    executeTimeMs += waitIntervalMs;
                                }
                            }

                            setTimeout(testExecFinished, waitIntervalMs, exec);
                        } else {
                            if (data.ExitCode != 0) {
                                reject("Exec exited with non-zero code: " + data.ExitCode);
                            } else {
                                resolve();
                            }
                        }
                    })

                    .catch(reject);
            };

            this.container.exec(execOptions)

                .then((exec) => {
                    return exec.start({
                        Detach: false,
                        Tty: true
                    });
                })

                .then(((exec) => {
                    this.container.modem.demuxStream(exec.output, process.stdout, process.stderr);
                    return exec;
                }).bind(this))

                .then(testExecFinished)

                .catch((err) => {
                    reject(err);
                });
        });
    }

    /**
     * Returns if the container is still running or not as of the latest refreshed state.
     * Note: call refreshState() first if container has been running for a while.
     *
     * @returns {boolean} True if the container is running since the laste refresh. False if the container is not running.
     */
    isRunning() {
        if (this.latestContainerState && (this.latestContainerState.State.Running || this.latestContainerState.Restarting)) {
            return true;
        }

        return false;
    }

    /**
     * Refresh the state of the container.
     *
     * @returns {Promise} Resolved when the state is updated.
     */
    refreshState() {
        return new Promise((resolve, reject) => {
            this.container.inspect().then((containerData) => {
                this.latestContainerState = containerData;
                resolve();
            }).catch(reject);
        });
    }

    /**
     * Stops the container.
     *
     * @returns {Promise} Resolved when the container is stopped and removed.
     */
    stop() {
        return new Promise((resolve) => {
            if (this.container) {
                this.container.stop()
                    .catch(() => { /* Container already stopped. No op */ })
                    .then((() => {
                        return this.container.remove();
                    }).bind(this))
                    .then(() => {
                        this.latestContainerState = null;
                        resolve();
                    });
            } else {
                resolve();
            }
        });
    }
}

module.exports = DockerRunner;
