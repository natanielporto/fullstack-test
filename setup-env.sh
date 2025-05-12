#!/usr/bin/env bash
set -euo pipefail

ROOT_PACKAGE_JSON="package.json"

if [ ! -f "$ROOT_PACKAGE_JSON" ]; then
  echo "Root package.json not found. Exiting."
  exit 1
fi

PACKAGE_MANAGER=$(jq -r '.packageManager // empty' "$ROOT_PACKAGE_JSON")

if [[ -z "$PACKAGE_MANAGER" ]]; then
  echo "packageManager not specified in root package.json. Exiting."
  exit 1
fi

IFS="@" read -r MANAGER VERSION <<< "$PACKAGE_MANAGER"

if [[ "$MANAGER" != "npm" ]]; then
  echo "Only npm is supported for now. Found: $MANAGER. Exiting."
  exit 1
fi

if ! command -v corepack >/dev/null 2>&1; then
  echo "Corepack is not installed. Trying to enable via Node.js."
fi

echo "Enabling corepack..."
corepack enable || true

echo "Ensuring npm@$VERSION is enabled..."
corepack prepare "npm@$VERSION" --activate

echo "npm $VERSION activated with corepack"
