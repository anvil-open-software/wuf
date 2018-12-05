/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

let http = require("http");
let fs = require("fs");
let server = null;

function getTenantFromToken(authHeader) {
    let token = authHeader.split(".");

    if (token.length != 3) {
        return null;
    }

    let payload = JSON.parse(Buffer.from(token[1], 'base64').toString());

    return payload.tid;
}

function startProxy() {

    let devServerTempFolder = __dirname + "/../tmp";
    let devServerRunningConfig = devServerTempFolder + "/runningServer.json";
    let servicePort;

    if (fs.existsSync(devServerRunningConfig)) {
        fileContent = JSON.parse(fs.readFileSync(devServerRunningConfig, "utf8"));

        servicePort = fileContent.uiConfigServer.port;
        console.log("Found ui config service running on port: " + servicePort);
    } else {
        throw "Ui config service isn't running. Run 'npm|yarn run startUiConfigServer' to start.";
    }

    server = http.createServer((request, response) => {
        let url = request.url;

        if (request.headers.hasOwnProperty("authorization")) {
            let tenantId = getTenantFromToken(request.headers.authorization);

            if (tenantId != null) {
                url = url.replace(/(\/api\/v\d*.\d*\/)(.*)/, "$1tenants/" + tenantId + "/$2");
            }
        }

        let extRequest = http.request({
            protocol: "http:",
            host: "localhost",
            port: servicePort,
            method: request.method,
            path: url,
            headers: request.headers
        });

        request.on("readable", function() {
            let body = request.read();
            if (body != null) {
                extRequest.write(body);
            }
        });

        request.on('end', function() {
            extRequest.end();
        });

        extRequest.on("response", (extResponse) => {
            response.statusCode = extResponse.statusCode;
            response.statusMessage = extResponse.statusMessage;
            for (let i = 0; i < extResponse.rawHeaders.length; i += 2) {
                response.setHeader(extResponse.rawHeaders[i], extResponse.rawHeaders[i + 1]);
            }

            let resBody = extResponse.read();

            if (resBody != null) {
                response.write(resBody);
            }

            response.end();
        });
    });

    server.listen(9080);
}

function closeProxy() {
    if (server != null) {
        server.close();
    }
}

module.exports = {
    startProxy: startProxy,
    closeProxy: closeProxy
};
