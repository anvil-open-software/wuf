#!/usr/bin/env bash

set -ev

is_cicrcleci_branch_master() {
  if [[ ${CIRCLE_BRANCH} = master ]]; then
    echo "✅ CircleCI branch is master"
    return 0
  else
    echo "🚫 CircleCI branch ${CIRCLE_BRANCH} is not master"
    return 1
  fi
}

is_feature_branch_version() {
  version=$(npx -c 'echo "$npm_package_version"')
  regex='^[[:digit:]]+(\.[[:digit:]]+)+(-[[:alnum:]]+)+'
  if [[ ${version} =~ $regex ]]; then
    echo "✅ Version ${version} is a feature branch version"
    return 0
  else
    echo "🚫 Version ${version} is not a feature branch version"
    return 1
  fi
}

if is_cicrcleci_branch_master || is_feature_branch_version; then
   var=$(pwd)
   echo "Start of publish WUF packages: CWD = $var."
   npm set //registry.npmjs.org/:_authToken=$NPM_TOKEN
   cat ./.npmrc
   npm whoami
   git reset --hard # removes staged and working directory changes
   lerna publish from-package --yes
fi
