#!/usr/bin/env bash

set -ev

source ./.circleci/is_version_publishable.sh

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
