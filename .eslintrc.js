module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-empty": ["error", { allowEmptyCatch: true }]
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  globals: {
    _: "readonly"
  }
};
