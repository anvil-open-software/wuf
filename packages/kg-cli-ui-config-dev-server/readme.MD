# Ui Conifg Dev Server

## Prerequisites

- Docker

## Running

The config dev server comes with 2 cli commands:

- startUiConfigServer
- stopUiConfigServer

**Note:** This records the running information inside a temp folder under 'repo/root/node_modules/@kion/kg-cli-ui-config-dev-server/tmp'. If you clear the node_modules folder without stopping the service, you will have to manually stop the container. A previously running service will block any attempts at starting a new one since the database is locked on port 9001.

### Command: startUiConfigServer

This cli command starts a ui config dev server listening on a random open port. If a dev server is already running it will show the listening port.

### The underlying docker containers

You can see the docker containers running by executing the cli command:

`c:\> docker ps`

Example output:

| CONTAINER ID | IMAGE                            | COMMAND                | CREATED      | STATUS      | PORTS                  | NAMES               |
| ------------ | -------------------------------- | ---------------------- | ------------ | ----------- | ---------------------- | ------------------- |
| ff56b4c30d08 | ui-config-service:1.0.0-SNAPSHOT | "/bin/sh -c /opt/ui-…" | 17 hours ago | Up 17 hours | 0.0.0.0:38760->80/tcp  | vigorous_goldwasser |
| f6bc41f7bb71 | blacklabelops/hsqldb:latest      | "/opt/hsqldb/docker-…" | 17 hours ago | Up 17 hours | 0.0.0.0:9001->9001/tcp | priceless_lamarr    |

#### Docker container: ui-config-service

The 'ui-config-service' is the web application service that is running. This is the main access point for the ui config service.

- Port: Random open port. The port can be found in the ports column of the 'docker ps' cli command.

#### Docker container: blacklabelops/hsqldb

The 'blacklabelops/hsqldb' is an hsqldb running to support the ui config service. You can see the github page here 'https://github.com/blacklabelops/hsqldb' for advanced commands.

Some basic commands:

You can get the containerId from the 'docker ps' cli command.

- Execute a cli command: <br />
  `docker exec -it {containerId} java -jar /opt/hsqldb/sqltool.jar --inlineRc=url=jdbc:hsqldb:hsql://localhost/ui-config,user=uiConfigUser,password= "--sql={query}"`
- Connect to the database using the sql tool: <br />
  `docker exec -it {containerId} java -jar /opt/hsqldb/sqltool.jar --inlineRc=url=jdbc:hsqldb:hsql://localhost/ui-config,user=uiConfigUser,password=`

### Command: stopUiConfigServer

This command will stop the running ui config dev server. If the node_modules folder has been deleted since it was started the docker containers will have to be removed manually.

#### Manual config server stopping

To manually stop the dev server, first find the running docker containers:

`c:/> docker ps`

Find the 'ui-config-service' and 'blacklabelops/hsqldb' containers.

| CONTAINER ID | IMAGE                            |
| ------------ | -------------------------------- |
| ff56b4c30d08 | ui-config-service:1.0.0-SNAPSHOT |
| f6bc41f7bb71 | blacklabelops/hsqldb:latest      |

Then run the following command for both containers:

`c:/> docker rm -f {containerId}`

This will stop and remove the container, if you just stop the container it will still be around:

`c:/> docker ps -a`

## Injecting into index.html

Since the ui config dev server runs on a random port there is an html web pack plugin for adding the `<link />` tag into your index.html. See '@kion/kg-webpack-ui-config-plugin' package for more details.

## Adding css variables to the dev server

Now that we have the ui config dev server running we need to add our css and scss variables to it.

The ui config server compiles scss, so feel free to add scss variables into the server. For more details on the ui config server see the ui config service repo 'https://gitlab.dematic.com/diq_cloud/services/ui-config'.

### CssVariablesInjector

See './dist/jsdoc/index.html' in the published package for details.