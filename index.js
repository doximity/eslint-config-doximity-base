// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    jasmine: true, // sets global jasmine variables for no-undef rule
    jest: true,
  },
  globals: {
    browser: true,
    $: true,
    $$: true,
  },
  extends: ['airbnb-base', 'prettier'],
  // required to lint *.vue files
  plugins: ['html'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.config.js',
      },
    },
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js'],
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // don't prefer default export
    'import/prefer-default-export': 0,
    // allow underscore dangles for embedded, items and links, used extensively in HAL
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_embedded', '_items', '_links', '__INITIAL_STATE__'],
      },
    ],
    // allow state and getters inside of store files
    'no-shadow': [
      'error',
      {
        allow: ['state', 'getters'],
      },
    ],
    // Vue pretty relies on reactivity via mutation
    'no-param-reassign': 0,
    'arrow-parens': 0,
    'global-require': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    // We get our data from a rails api, which follows ruby conventions
    camelcase: [0, { properties: 'never' }],
  },
};
