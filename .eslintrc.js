module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "babel-eslint",
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/no-unused-state': 0,
    'react/no-deprecated': 0,
    'no-console': 0,
    indent: 0,
    semi: 0,
    quotes: 0,
    'arrow-parens': 0,
    'arrow-body-style': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'comma-dangle': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'no-trailing-spaces': 0,
  },
}
