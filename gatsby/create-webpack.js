const path = require('path')

const onCreateWebpackConfig = ({ stage, loaders, actions }) => {

  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /animejs/, use: loaders.null()
          },
          {
            test: /miniraf/, use: loaders.null()
          },
          {
            test: /scrollreveal/, use: loaders.null()
          }
        ]
      }
    })
  }

  actions.setWebpackConfig({
    devtool: process.env.NODE_ENV === 'production'
      ? false
      : 'eval-source-map'
  })
}

module.exports = onCreateWebpackConfig
