# Mosano Test Fullstack — Monorepo

This repository is a **monorepo** managed with **NPM Workspaces + TurboRepo**, containing:

- `apps/front` — Frontend built with **Next.js**, Zod, React, React Hook Form, etc.
- `apps/back` — **Node.js API** using Express, TypeScript, and MongoDB (via Mongoose)
- `packages/schemas` — Shared **Zod validation schemas** used across frontend and backend

---

## Install dependencies

To install all dependencies across all apps and packages:

```bash
npm install
```

This will install everything into the root node_modules, using workspace symlinks.

To fully reset and reinstall:

```
rm -rf node_modules package-lock.json
npm install
```

Scripts

```
npm run dev (runs frontend and backend in parallel via Turbo)
npm run dev --filter=front (runs the frontend only)
npm run dev --filter=back (runs the backend only)
npm run build (builds all workspaces)
npm run lint (lints all workspaces)
```

Shared Zod Schemas
The @mosano-test-fullstack/schemas package is located at packages/schemas.

Example usage in frontend:

```
import { userSchema } from "@mosano-test-fullstack/schemas"
```

Example usage in backend:

```
import { userSchema } from "@mosano-test-fullstack/schemas"
```

All types (e.g. UserSchema) are exported from the same module.

Debug / Check
To check if dependencies are correctly linked:

```
npm ls @mosano-test-fullstack/schemas
```

Conventions
Use Zod schemas (userSchema, authSchema, etc.) across front and back.
