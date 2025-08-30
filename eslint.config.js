const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");

module.exports = [
  {
    files: ["**/*.ts"], // Target TypeScript files
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
      },
      globals: {
        node: true,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "no-console": "warn",
    },
  },
  {
    files: [
      "src/**/*.ts",
      "test/**/*.js",
    ],
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
