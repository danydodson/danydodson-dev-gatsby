const path = require('path')

const onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
          {
            test: /animejs/,
            use: loaders.null(),
          },
          {
            test: /miniraf/,
            use: loaders.null(),
          },
        ],
      },
    })
  }

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

module.exports = onCreateWebpackConfig