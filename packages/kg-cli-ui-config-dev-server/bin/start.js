/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

#!/usr/bin/env node

const UiConfigRunner = require("../lib/uiconfig-runner/UiConfigRunner");
const UiConfigDatabase = require("../lib/uiconfig-runner/UiConfigDatabase");
const RunningServiceConfig = require("../lib/RunningServiceConfig");

let uiConfigRunner = new UiConfigRunner();
let uiConfigDatabase = new UiConfigDatabase();

let stopContainers = function () {
    return new Promise((resolve) => {
        uiConfigRunner.stopUiConfig()

            .catch((err) => {
                console.error("Error stopping config server: " + err);
            })

            .then(() => {
                return uiConfigDatabase.stopDatabase();
            })

            .catch((err) => {
                console.error("Error stopping config database: " + err);
            })

            .then (() => {
                return RunningServiceConfig.clearRunningConfig();
            })

            .catch((err) => {
                console.error("Error clearing running configuration: " + err);
            })

            .then(resolve);
    });
}

if (RunningServiceConfig.isRunning()) {
    uiServiceConfig = RunningServiceConfig.getRunningConfig(RunningServiceConfig.SERVICE_CONFIG_SECTION_NAME);

    console.log("Ui config service already started on port: " + uiServiceConfig.port);
    process.exit(0);
}

try {
    uiConfigDatabase.startDatabase()
        .then(() => {
            return uiConfigRunner.startUiConfig(uiConfigDatabase);
        })
        .then(() => {
            console.log("Ui Config started on port: " + uiConfigRunner.uiConfigPort);
            process.exit(0);
        })
        .catch((reason) => {
            stopContainers().then(() => {
                console.error("Error starting ui config service: " + reason);
                process.exit(1);
            });
        });
} catch (err) {
    stopContainers().then(() => {
        console.error("Error starting ui config service: " + err);
        process.exit(1);
    });
}
