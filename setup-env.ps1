#!/usr/bin/env pwsh
$ErrorActionPreference = "Stop"

$rootPackageJson = "package.json"

if (-not (Test-Path $rootPackageJson)) {
    Write-Host "Root package.json not found. Exiting."
    exit 1
}

$packageManager = (Get-Content $rootPackageJson | ConvertFrom-Json).packageManager

if (-not $packageManager) {
    Write-Host "packageManager not specified in root package.json. Exiting."
    exit 1
}

if ($packageManager -match "^([^@]+)@(.+)$") {
    $manager = $matches[1]
    $version = $matches[2]
} else {
    Write-Host "Invalid packageManager format: $packageManager. Exiting."
    exit 1
}

if ($manager -ne "npm") {
    Write-Host "Only npm is supported for now. Found: $manager. Exiting."
    exit 1
}

if (-not (Get-Command "corepack" -ErrorAction SilentlyContinue)) {
    Write-Host "Corepack is not installed. Trying to enable via Node.js."
}

Write-Host "Enabling corepack..."
try {
    corepack enable
} catch {
    Write-Host "Corepack enable failed. Continuing..."
}

Write-Host "Ensuring npm@$version is enabled..."
corepack prepare "npm@$version" --activate

Write-Host "npm $version activated with corepack"
