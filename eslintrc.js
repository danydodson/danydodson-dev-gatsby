module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: [['@components', 'src/components']],
    },
  },
  rules: {
    'react/jsx-key': 0,
    // 'react/jsx-no-undef': 0,
    // 'react/jsx-uses-vars': 0,
    // 'react/jsx-uses-react': 0,
    // 'react/react-in-jsx-scope': 0,
    // 'react/no-children-prop': 0,
    // 'react/display-name': 0,
    // 'react/prop-types': 0,
  },
}
