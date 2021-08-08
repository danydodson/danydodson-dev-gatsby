const path = require('path')

exports.createPages = require('./gatsby/create-pages')
exports.onCreateNode = require('./gatsby/on-create-node')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  
  actions.setWebpackConfig({
    devtool: process.env.NODE_ENV !== 'production'
      ? 'eval-source-map'
      : false
  })

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@config': path.resolve(__dirname, 'data/config')
      }
    }
  })

}
