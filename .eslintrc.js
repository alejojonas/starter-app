// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 0,
    'linebreak-style': ['error', 'unix'],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react-native/no-inline-styles': 0,
    strict: ['error', 'global'],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    'one-var': ['error', 'never'],
    camelcase: 'error',
    'no-unused-vars': 'warn',
    'no-multi-assign': 'error',
    'no-array-constructor': 'error',
    'no-new-object': 'error',
    'quote-props': ['error', 'as-needed'],
    'no-new-wrappers': 'error',
    'no-extra-boolean-cast': 'error',
    eqeqeq: 'error',
    yoda: 'error',
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}] //should add ".ts" if typescript project
  }
};
