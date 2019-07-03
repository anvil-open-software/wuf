#!/usr/bin/env bash

if [[ -z ${CIRCLE_PULL_REQUEST} ]]; then
    echo "✅ Not a pull request build"
    exit 0;
fi

package_version=`npx -c 'echo "$npm_package_version"'`
changelog_version=`sed -nE 's/## \[([0-9]+(\.[0-9]+)+)\]( +- +[0-9]+-[0-9]+-[0-9]+)?/\1/p' CHANGELOG.md | head -n 1`
if [[ ${package_version} != ${changelog_version} ]]; then
    echo "🚫 Versions in package.json (${package_version}) and CHANGELOG.md (${changelog_version}) are different"
    exit 1
fi
if git ls-remote -q --tags | grep -q v${package_version}; then
    echo "🚫 Tag already exists for version ${package_version}"
    exit 2
fi
echo "✅ Pull request introduces version ${package_version}"
