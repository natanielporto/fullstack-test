import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
      },
      globals: { ...globals.node, ...globals.browser },
    },
    plugins: {
      js,
      "simple-import-sort": simpleImportSort,
      "@typescript-eslint": tseslintPlugin,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      ...tseslintPlugin.configs["recommended"].rules,
    },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
];
