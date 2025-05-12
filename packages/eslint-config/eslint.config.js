// import js from "@eslint/js";
// import globals from "globals";
// import * as tseslint from "@typescript-eslint/eslint-plugin";
// import * as tsParser from "@typescript-eslint/parser";
// import json from "@eslint/json";
// import simpleImportSort from "eslint-plugin-simple-import-sort";

// export default [
//   {
//     files: ["**/*.{js,mjs,cjs,ts,tsx}"],
//     languageOptions: {
//       parser: tsParser,
//       parserOptions: {
//         project: true, // Se você tiver tsconfig.json no projeto. Caso não tenha, remova essa linha.
//       },
//       globals: { ...globals.node, ...globals.browser },
//     },
//     plugins: {
//       js,
//       "simple-import-sort": simpleImportSort,
//       "@typescript-eslint": tseslint,
//     },
//     rules: {
//       "simple-import-sort/imports": "error",
//       "simple-import-sort/exports": "error",
//       ...tseslint.configs.recommended.rules, // Aqui você injeta as regras recomendadas
//     },
//   },
//   {
//     files: ["**/*.json"],
//     plugins: { json },
//     language: "json/json",
//     extends: ["json/recommended"],
//   },
// ];
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
        project: true, // Detecção automática do tsconfig.json
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
      // Regras recomendadas do TypeScript manualmente aplicadas
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
