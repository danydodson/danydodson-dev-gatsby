const path = require('path')

const onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  
  actions.setWebpackConfig({
    devtool: process.env.NODE_ENV === 'production'
      ? false
      : 'eval-source-map'
  })

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@config': path.resolve(__dirname, 'data/config')
      }
    }
  })
}

module.exports = onCreateWebpackConfig
