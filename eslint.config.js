const { defineConfig } = require("eslint/config");
const react = require("eslint-plugin-react");

module.exports = defineConfig([
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: "readonly",
      },
    },
    plugins: {
      react,
    },
    rules: {
      "prefer-const": "warn",
      "no-var": "error",
      "no-constant-binary-expression": "error",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
  },
]); 