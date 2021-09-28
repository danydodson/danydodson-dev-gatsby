module.exports = {
  presets: [
    ['@babel/preset-env'],
    ['@babel/preset-react'],
    ['babel-preset-gatsby']
  ],
  plugins: [
    'babel-plugin-styled-components',
    "@babel/plugin-proposal-class-properties",
    '@babel/plugin-proposal-private-methods',
    "@babel/plugin-proposal-private-property-in-object",
    ["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }],
    ["@babel/plugin-proposal-optional-chaining", { "loose": false }],
    ["@babel/plugin-syntax-dynamic-import", { "loose": false }],
    ["@babel/plugin-syntax-bigint", { "loose": false }],
    '@babel/plugin-syntax-jsx'
  ]
}
