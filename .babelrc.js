module.exports = {
  presets: [
    ['@babel/preset-env'],
    ['@babel/preset-react'],
    ['babel-preset-gatsby'],
  ],
  plugins: [
    ['babel-plugin-styled-components', { "loose": false }],
    ["@babel/plugin-proposal-class-properties", { "loose": false }],
    ["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }],
    ["@babel/plugin-proposal-optional-chaining", { "loose": false }],
    ['@babel/plugin-proposal-private-methods', { "loose": false }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": false }],
    ["@babel/plugin-syntax-bigint", { "loose": false }],
    ["@babel/plugin-syntax-dynamic-import", { "loose": false }],
    ['@babel/plugin-syntax-jsx', { "loose": false }],
  ]
}
