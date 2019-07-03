#!/usr/bin/env bash

is_master_branch() {
  if [[ ${CIRCLE_BRANCH} = master ]]; then
    echo "✅ branch is master"
    return 0
  else
    echo "🚫 branch ${CIRCLE_BRANCH} is not master"
    return 1
  fi
}

is_feature_branch_version() {
  version=$(mvn help:evaluate -Dexpression=project.version -q -DforceStdout)
  regex='^[[:digit:]]+(\.[[:digit:]]+)+(-[[:alnum:]_.]+)+$'
  if [[ ${version} =~ $regex ]]; then
    echo "✅ Version ${version} is a feature branch version"
    return 0
  else
    echo "🚫 Version ${version} is not a feature branch version"
    return 1
  fi
}

if is_master_branch || is_feature_branch_version; then
  echo "... script will proceed"
else
  exit 0
fi
