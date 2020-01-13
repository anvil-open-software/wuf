#!/usr/bin/env bash

set -euv

is_cicrcleci_branch_master() {
  if [[ ${CIRCLE_BRANCH} = master ]]; then
    echo "✅ Tagging, CircleCI branch is master"
    return 0
  else
    echo "🚫 Not tagging, CircleCI branch ${CIRCLE_BRANCH} is not master"
    return 1
  fi
}

if is_cicrcleci_branch_master; then
   # Set the tag to be the package.json version
   # Deploy only for master.
   GITTAG=v$(npx -c 'echo "$npm_package_version"')
   echo Taging $CIRCLE_BRANCH: $GITTAG

   git config --global user.email "circle-ci.svic@weichaiamerica.com"
   git config --global user.name "cricle-ci"

   # Using annotated tags; required to include tag to prevent build from running
   # when checking in the tag [https://circleci.com/docs/2.0/skip-build/]
   git tag -a $GITTAG -m "Pull Request Tag [skip ci]"
   git push origin $GITTAG
fi
