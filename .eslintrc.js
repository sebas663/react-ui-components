module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["./src"],
      },
    },
  },
  rules: {
    "import/extensions": ["error", "never"],
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "import/prefer-default-export": "off",
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": "off",
    "object-curly-newline": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-one-expression-per-line": 0,
    "react/no-unescaped-entities": 0,
  },
};
