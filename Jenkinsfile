#!groovy

/*
This Jenkins pipeline performs the following steps:

1. Uses the nodejs plugin to perform an 'npm install'.  The configId references a configuration that includes a custom .npmrc config with authentication that allows us to connect to Artifactory and pull down Dematic-specific packages.
2. Use the Angular compiler to build the application.
3. Run unit tests.  If any tests fail, Jenkins will throw an error.
4. Run integration tests.  If any tests fail, Jenkins will throw an error.
5. Determine whether the current branch is publishable.  If, so, create a Docker image from nginx using the Dockerfile from project root.  The Dockerfile will, itself, cause the compiled application files to be copied into the nginx html folder.
6. Deploy the Docker image.
7. Broadcast build status/success/failure via Office 365 connector & hipchat.

Required Jenkins plugins:
    * buildDiscarder
    * gitLabConnection
    * ansiColor
    * node

Additional steps:
    * Configure Jenkins to use the variable library: https://gitlab.dematic.com/Dematiclabs/jenkinsfile_library (or create a copy of this repo to use for our own purposes -- safer)
    * Create a nodejs configuration called "wuf" that uses the following config file...
    * create a Jenkins configuration file with the ID "npmrc" that points to https://artifactory.dematic.com/artifactory/api/npm/npm-local/, uses valid Artifactory credentials, and uses the following registry scopes: dlabs, dematic, kion
    * Set deployLocation var (the following is using a Google cloud placeholder "us.gcr.io/cloud_visualization_services/living_style_guide")
    * Setup deployment (the following includes a commented-out example of using Helm for this purpose)
    * Configure notification services.
    * NOTE: Test result errors are being logged to test_results_unit/TESTS-*.xml and test_results_integration/xmloutput.xml
*/

@Library('jenkinsfile_library@v201805081618_13773e7') _
properties([
    buildDiscarder(logRotator(numToKeepStr: '5')),  // set Jenkins to discard builds older than the most recent 5
    gitLabConnection('gitlab') // Use the Jenkins gitlab plugin
])

timestamps { // Add timestamps to the Console Output
    def deployLocation = 'us.gcr.io/cloud_visualization_services/living_style_guide'
    def currentProjectVersion
    node('docker') {
        try {
            ansiColor('xterm') {
                // The AnsiColor plugin adds support for ANSI escape sequences, including color, to Console Output
                stage('build') {
                    cleanCheckout()
                    gitlabCommitStatus('build') {
                        // Trigger builds in Jenkins when code is committed or merge requests are opened/updated
                        currentProjectVersion = readJSON(file: 'package.json').version

                        nodejs(nodeJSInstallationName: 'wuf', configId: 'npmrc') {
                            sh 'npm install' // install dependencies and create node_modules folder
                            sh 'npm run build-prod' // use Angular compiler to build the application in production mode
                            withEnv(['DBUS_SESSION_BUS_ADDRESS=/dev/null']) {
                                wrap([$class: 'Xvfb', autoDisplayName: true, parallelBuild: true]) {
                                    // Start X11 (for unit testing)
                                    try {
                                        sh 'npm run test -- --watch=false'
                                    } finally {
                                        // Publish results in the format/location Jenkins can read
                                        junit allowEmptyResults: true, testResults: 'test_results_unit/TESTS-*.xml'
                                    }
                                }
                            }
                            withEnv(['DBUS_SESSION_BUS_ADDRESS=/dev/null']) {
                                wrap([$class: 'Xvfb', autoDisplayName: true, parallelBuild: true]) {
                                    try {
                                        sh 'npm run e2e -- --watch=false'
                                    } finally {
                                        // Publish results in the format/location Jenkins can read
                                        junit allowEmptyResults: true, testResults: 'test_results_integration/xmloutput.xml'
                                    }
                                }
                            }
                        }
                    }
                }

                if (!isFeatureBranch()) {
                    // Create a lightweight tag with current project version to mark the build point and use it for publishing
                    sh "git tag v${currentProjectVersion}"
                }

                // Publish only if this is the master branch
                if (isPublishable(currentProjectVersion)) {
                    stage('docker') {
                        // Use nodejs plugin to run npm install and bootstrap
                        nodejs(nodeJSInstallationName: 'wuf', configId: 'npmrc') {
                            sh 'npm run build-prod' // Output bundles from Angular compiler
                            docker.withTool('17.12.0-ce') {
                                docker.withRegistry('https://us.gcr.io', 'jenkins-docker') {
                                    docker.withServer('') {
                                        docker.build(deployLocation).push(currentProjectVersion)
                                    }
                                }
                            }
                        }

                        // Push docker image to server and install it
//						helm 'package wuf ' + currentProjectVersion
//						helm 'publish'
//						helm 'install wuf ' + currentProjectVersion
                    }
                }

                if (!isFeatureBranch()) {
                    // Push tags
                    gitPush('--tags')
                }
            }
        } catch (err) {
            currentBuild.result = "FAILED"
            throw err
        } finally {
            notifyBuild(currentBuild.result)
        }
    }
}
