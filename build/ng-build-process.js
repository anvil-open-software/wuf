/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

let projectDirectory = path.resolve(__dirname, '..', 'projects');

fs.readdir(projectDirectory, (err, projects) => {
    projects.forEach(project => {
        // stderr is sent to stdout of parent process
        // you can set options.stdio if you want it to go elsewhere
        exec(`ng build @anviltech/${project}`, (error, stdout, stderr) => {
            console.log(`ng build for @anviltech/${project}`);
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);

            if (stderr && stderr.length > 0) console.log(`stderr: ${stderr}`);
        });
    })
})
