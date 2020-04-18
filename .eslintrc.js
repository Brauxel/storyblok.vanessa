module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/prop-types': 0,
    '@typescript-eslint/default-param-last': 0
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  }
}
