#!/usr/bin/env bash

set -ev

source ./.circleci/is_version_publishable.sh

# Set the tag to be the package.json version
# For branches other than master, append an unique value to ...
# provent build failures.
GITTAG=v$(npx -c 'echo "$npm_package_version"')
echo Taging $CIRCLE_BRANCH: $GITTAG

# Using annotated tags; required to include tag to prevent build from running
# when checking in the tag [https://circleci.com/docs/2.0/skip-build/]
git config --global user.email $GH_EMAIL
git config --global user.name $GH_NAME

# Using annotated tags; required to include tag to prevent build from running
# when checking in the tag [https://circleci.com/docs/2.0/skip-build/]
git tag -a $GITTAG -m "Pull Request Tag [skip ci]"
git push origin $GITTAG
