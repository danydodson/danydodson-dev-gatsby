const path = require('path')

const onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /animejs/,
            use: loaders.null()
          },
          {
            test: /miniraf/,
            use: loaders.null()
          },
          {
            test: /scrollreveal/,
            use: loaders.null()
          }
        ]
      }
    })
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components')
      }
    }
  })
}

module.exports = onCreateWebpackConfig
