#!/bin/bash
if ! corepack --version &>/dev/null; then
  corepack enable
fi

NPM_VERSION=$(jq -r '.packageManager' package.json | grep -oP 'npm@\K[\d\.]+')

if [ -z "$NPM_VERSION" ]; then
  echo "MPM version not specified in package.json. Exiting."
  exit 1
fi

corepack prepare "npm@$NPM_VERSION" --activate

echo "NPM version: $(npm --version)"
echo "Node version: $(node --version)"
echo "Environment setup complete"