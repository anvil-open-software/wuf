#!/usr/bin/env bash

if [ $CIRCLE_BRANCH == $DEPLOY_BRANCH ]; then
   var=$(pwd)
   echo "Start of publish WUF packages: CWD = $var."
   echo "//https://www.npmjs.com/:_authToken=$NPM_TOKEN" > ./.npmrc
   cat ./.npmrc
   git reset --hard # removes staged and working directory changes
   lerna publish from-package --yes
fi
