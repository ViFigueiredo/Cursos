module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: ['plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier', 'jest'],
  rules: {
    'no-console': 0,
  },
};
