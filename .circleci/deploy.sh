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

if is_cicrcleci_branch_master; then
   # Deloying the applycation only for master. This might change once we
   # figure out how to do it without overiding the current deployment
   git config --global user.email $GH_EMAIL
   git config --global user.name $GH_NAME

   git clone $CIRCLE_REPOSITORY_URL out

   cd out
   git checkout $GH_PAGES_BRANCH || git checkout --orphan $GH_PAGES_BRANCH
   git rm -rf .
   cd ..

   cp -a dist/. out/.

   mkdir -p out/.circleci && cp -a .circleci/. out/.circleci/.
   cd out

   git add -A
   git commit -m "Automated deployment to GitHub Pages: ${CIRCLE_SHA1} [skip ci]" --allow-empty

   git push origin $GH_PAGES_BRANCH

   var=$(pwd)
   echo "Done deploying WUF: CWD $var."
   cd ..
   var=$(pwd)
   echo "Done going bach to orginal dir: CWD $var."
fi
