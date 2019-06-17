#!/usr/bin/env bash

if [ $CIRCLE_BRANCH == $DEPLOY_BRANCH ]; then
   var=$(pwd)
   echo "Start of publish WUF packages: CWD = $var."
   npm set //registry.npmjs.org/:_authToken=$NPM_TOKEN
   cat ./.npmrc
   npm whoami
   git reset --hard # removes staged and working directory changes
   lerna publish from-package --yes
fi
