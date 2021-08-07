module.exports = {
  presets: [
    ['@babel/preset-env'],
    ['@babel/preset-react'],
    ['babel-preset-gatsby'],
  ],
  plugins: [
    'babel-plugin-styled-components',
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
    ['@babel/plugin-proposal-private-methods', { 'loose': true }],
  ],
}
