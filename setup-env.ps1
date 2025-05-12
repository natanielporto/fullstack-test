if (-not (Get-Command corepack -ErrorAction SilentlyContinue)) {
    corepack enable
}

$packageManagerLine = Get-Content package.json | Select-String '"packageManager"' 
if (-not $packageManagerLine) {
    Write-Host "NPM version not specified in package.json. Exiting."
    exit 1
}

$npmVersion = ($packageManagerLine -replace '.*npm@', '') -replace '[^0-9\.]', ''

corepack prepare "npm@$npmVersion" --activate

Write-Host "NPM version: $(npm --version)"
Write-Host "Node version: $(node --version)"
Write-Host "Environment setup complete"
