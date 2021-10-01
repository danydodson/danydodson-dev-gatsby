module.exports = {
  root: true,
  extends: `@upstatement/eslint-config/react`,
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [
          ['@config', 'content/meta/config'],
          ['@components', 'src/components'],
          ['@fonts', 'src/fonts'],
          ['@hooks', 'src/hooks'],
          ['@images', 'src/images'],
          ['@pages', 'src/pages'],
          ['@styles', 'src/styles'],
          ['@utilities', 'src/utilities'],
        ],
      },
    },
  },
};
