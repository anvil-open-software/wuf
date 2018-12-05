/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

#!/usr/bin/env node

const UiConfigRunner = require('../lib/uiconfig-runner/UiConfigRunner');
const UiConfigDatabase = require('../lib/uiconfig-runner/UiConfigDatabase');
const RunningServiceConfig = require("../lib/RunningServiceConfig");

let uiConfigRunner = new UiConfigRunner();
let uiConfigDatabase = new UiConfigDatabase();

let devServerTempFolder = __dirname + "/../tmp";
let devServerRunningConfig = devServerTempFolder + "/runningServer.json";

if (!RunningServiceConfig.isRunning()) {
    console.log("Ui config service not started");
    process.exit(0);
}

uiConfigRunner.attachUiConfig()

    .then(() => {
        return uiConfigRunner.stopUiConfig();
    })

    .catch((err) => {
        console.error("Error attaching to ui config server container: " + err);
    })

    .then(() => {
        return uiConfigDatabase.attachDatabase()
    })

    .then(() => {
        return uiConfigDatabase.stopDatabase();
    })

    .catch((err) => {
        console.error("Error attaching and stopping ui config database container: " + err);
    })

    .then(() => {
        return RunningServiceConfig.clearRunningConfig();
    })

    .catch((err) => {
        console.error("Error clearing running config: " + err);
    });

