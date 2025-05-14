# Mosano Fullstack Test

This repository contains a full-stack application, structured as a monorepo, demonstrating a complete development workflow.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Monorepo Structure](#monorepo-structure)
- [Dependencies](#dependencies)
  - [Backend (apps/back)](#backend-appsback)
  - [Frontend (apps/front)](#frontend-appsfront)
  - [Shared Configuration (packages/vitest-config, packages/typescript-config)](#shared-configuration-packagesvitest-config-packagestypescript-config)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Overview

This creates a table of people, that can be added and displayed with Name, Surname, Country and Birthday.

## Architecture

- **Monorepository:** Turborepo.
- **Frontend:** NextJS, React, TypeScript, Tailwind, Next Actions, Next Form, Next Fetch.
- **Backend:** Node.js, Express.js, TypeScript, Mongoose.
- **Database:** MongoDB.
- **Communication:** REST API.
- **Front and Back validation:** Zod.
- **Tests:** Vitest.
- **Git Hooks:** Husky with validations and tests Pre-commit and Pre-push.

## Monorepo Structure

- `apps/back`: Contains the backend application.
- `apps/front`: Contains the frontend application.
- `packages/eslint-config`: Contains shared ESLint configuration.
- `packages/schemas`: Contains Zod validations.
- `packages/vitest-config`: Contains shared Vitest configuration.
- `packages/typescript-config`: Contains shared TypeScript configuration.

### Backend (apps/back)

- Node.js
- Express.js
- Mongoose
- Vitest

### Frontend (apps/front)

- React
- TypeScript
- NextJS
- TailwindCSS
- Vitest

### Shared Configuration (packages/vitest-config, packages/typescript-config)

- Vitest
- TypeScript
- ESLint
- Schema validation

## Getting Started

You will need Git and Node installed.

### Prerequisites

- Node.js (version >=22)
- npm

### Installation

1.  Clone the repository: `git clone https://github.com/natanielporto/fullstack-test`
2.  Install dependencies: `npm install`

### MongoDB Container

This requires Docker or equivalent installed on your machine. Running Backend with Docker Compose (Includes MongoDB)

1.  Navigate to the backend directory: `cd apps/back`
2.  Start the backend and MongoDB using Docker Compose: `docker-compose up -d`

### Running the Application

- Run all: `npm run dev`
- Run the backend: `npm run dev --workspace=back`
- Run the frontend: `npm run dev --workspace=front`

### Running Tests

- Run all tests: `npm run test`
- Run backend tests: `npm run test --workspace=back`
- Run frontend tests: `npm run test --workspace=front`

### Running Git Hooks

- Make alterations to the project
- Run `git add .`
- Run `git commit -m "your-custom-message-here"`
