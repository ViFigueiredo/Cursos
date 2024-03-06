module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // 'prettier/prettier': 'error',
    'no-console': 0,
    'no-underscore-dangle': 0,
    'import/newline-after-import': 0,
    'class-methods-use-this': 0,
    'object-curly-newline': 0,
  },
  plugins: ['prettier'],
};
