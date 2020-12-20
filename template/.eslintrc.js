module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-irregular-whitespace': ['error', { skipStrings: false }],
    'no-prototype-builtins': 'off',
    'no-shadow': ['warn', { builtinGlobals: false }],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-var': 'error',
    'no-warning-comments': [
      'error',
      { location: 'anywhere', terms: ['fixme', 'xxx'] },
    ],
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: false,
          object: true,
        },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      { caseSensitive: false },
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      { caseSensitive: true, natural: true },
    ],
  },
};
