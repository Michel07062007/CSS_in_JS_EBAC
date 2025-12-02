import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      pluginReact,
      pluginReactHooks,
    },
    extends: [
      "js/recommended",
      "prettier/recommended",
      ...pluginReact.configs.flat.recommended,
      ...pluginReactHooks.configs.recommended,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error", // Enforce rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Check effect dependencies
    },
  },
  tseslint.configs.recommended,
]);