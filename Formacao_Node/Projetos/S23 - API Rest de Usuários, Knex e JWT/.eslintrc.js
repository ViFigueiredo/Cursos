module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'comma-dangle': 0,
    'no-console': 0,
    'padded-blocks': 0,
    'class-methods-use-this': 0,
    'import/newline-after-import': 0,
  },
};
