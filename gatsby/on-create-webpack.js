const path = require('path')

const onCreateWebpackConfig = ({ stage, loaders, actions }) => {

  actions.setWebpackConfig({
    devtool: process.env.NODE_ENV === 'production'
      ? false
      : 'eval-source-map'
  })

  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          }
        ]
      }
    })
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'data/config'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      }
    }
  })
}

module.exports = onCreateWebpackConfig
