import js from "eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.js", "**/*.cjs"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      // ошибки
      "no-undef": "error",
      "no-unreachable": "error",
      "no-duplicate-case": "error",
      "no-func-assign": "error",
      "no-redeclare": "error",

      // полезно
      "eqeqeq": ["warn", "always"],
      "curly": ["warn", "all"],
      "prefer-const": "warn",

      // учеба / тесты
      "no-console": "off",
      "no-unused-vars": "off",
      "no-empty": "warn",

      // async
      "no-async-promise-executor": "error",
      "require-await": "warn"
    },
    ignores: ["node_modules/**", "dist/**", "build/**"]
  }
]);

