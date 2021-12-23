module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  extends: [
    'plugin:react/recommended'
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      alias: [
        ['assets', 'src/assets'],
        ['components', 'src/components'],
        ['config', 'src/config'],
        ['content', 'src/content'],
        ['fonts', 'src/fonts'],
        ['hooks', 'src/hooks'],
        ['images', 'src/images'],
        ['pages', 'src/pages'],
        ['styles', 'src/styles'],
        ['templates', 'src/templates'],
        ['utilities', 'src/utilities'],
      ]
    }
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  ignorePatterns: ['node_modules'],
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 2,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': [2, { controlComponents: ['Input'] }],
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'react-hooks/rules-of-hooks': 2
  }
}