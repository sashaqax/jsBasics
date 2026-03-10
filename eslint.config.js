// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // правила
      "no-undef": "error",
      "no-unreachable": "error",
      "no-duplicate-case": "error",
      "no-func-assign": "error",
      "no-redeclare": "error",

      eqeqeq: ["warn", "always"],
      curly: ["warn", "all"],
      "prefer-const": "warn",

      "no-console": "off",
      "no-unused-vars": "off",
      "no-empty": "warn",

      "no-async-promise-executor": "error",
      "require-await": "warn",
    },
  },
  {
    ignores: ["node_modules/**", "dist/**", "build/**"],
  },
];
