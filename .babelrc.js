module.exports = {
  presets: [
    ['@babel/preset-env'],
    ['@babel/preset-react'],
    ['babel-preset-gatsby'],
  ],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-syntax-jsx',
    "@babel/plugin-proposal-class-properties",
    '@babel/plugin-proposal-private-methods',
    "@babel/plugin-proposal-private-property-in-object",
  ],
}
