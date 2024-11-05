// eslint.config.js
import { ESLint } from "eslint";

export default [
  new ESLint.FlatConfig({
    files: ["**/*.js"],
    rules: {
      // Define your rules here. For example:
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  })
];
