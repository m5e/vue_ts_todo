module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "@typescript-eslint/parser", // typescript 系の lint エラー対応で babel-eslint から変更
    ecmaVersion: 2018,
    ecmaFeatures: {
      legacyDecorators: true,
      "no-undef": "off",
      "no-unused-vars": "off",
      strict: "off",
    },
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
