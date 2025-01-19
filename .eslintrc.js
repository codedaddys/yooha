module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@tanstack/query/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [".*.js", "*.config.js"],
  plugins: [
    "eslint-plugin-react-compiler",
    "react",
    "react-hooks",
    "react-native",
    "simple-import-sort",
    "@tanstack/query",
  ],
  rules: {
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        fixStyle: "separate-type-imports",
      },
    ],
    "linebreak-style": ["error", "unix"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "object-curly-spacing": ["error", "always"],
    quotes: ["error", "double", { avoidEscape: true }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    semi: ["error", "always"],
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "(useDeepMemo)",
      },
    ],
    "react-compiler/react-compiler": "error",
  },
};
