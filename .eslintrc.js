module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    jest: true
  },
  extends: ['standard', 'eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': 'error'
  }
}
