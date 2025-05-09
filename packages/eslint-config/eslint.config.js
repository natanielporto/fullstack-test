import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
];
