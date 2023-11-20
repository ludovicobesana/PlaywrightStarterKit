/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "no-unused-vars": "off",
    "no-console": 0,
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "no-restricted-syntax": [
      "error",
      {
        selector: "CallExpression[callee.property.name='only']",
        message: "We don't want to leave .only on our tests😱",
      },
    ],
  },
};
