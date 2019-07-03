#!/usr/bin/env bash

set -ev

source ./.circleci/is_version_publishable.sh

var=$(pwd)
echo "Start of publish WUF packages: CWD = $var."
npm set //registry.npmjs.org/:_authToken=$NPM_TOKEN
npm whoami
git reset --hard # removes staged and working directory changes
lerna publish from-package --yes
