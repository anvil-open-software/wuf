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
   # Set the tag to be the package.json version
   # For branches other than master, append an unique value to ...
   # provent build failures.
   GITTAG=v$(npx -c 'echo "$npm_package_version"').$CIRCLE_BUILD_NUM
   echo Taging $CIRCLE_BRANCH: $GITTAG

   # Using annotated tags; required to include tag to prevent build from running
   # when checking in the tag [https://circleci.com/docs/2.0/skip-build/]
   git config --global user.email $GH_EMAIL
   git config --global user.name $GH_NAME

   # Using annotated tags; required to include tag to prevent build from running
   # when checking in the tag [https://circleci.com/docs/2.0/skip-build/]
   git tag -a $GITTAG -m "Pull Request Tag [skip ci]"
   git push origin $GITTAG
fi
