const path = require('path')

const onCreateWebpackConfig = ({ stage, loaders, actions }) => {

  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          { test: /animejs/, use: loaders.null() },
          { test: /miniraf/, use: loaders.null() },
          { test: /scrollreveal/, use: loaders.null() }
        ]
      }
    })
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        'assets/*': path.resolve(__dirname, 'src/assets/*'),
        'components/*': path.resolve(__dirname, 'src/components/*'),
        'config/*': path.resolve(__dirname, 'src/config/*'),
        'content/*': path.resolve(__dirname, 'src/content/*'),
        'fonts/*': path.resolve(__dirname, 'src/templates/*'),
        'hooks/*': path.resolve(__dirname, 'src/hooks/*'),
        'images/*': path.resolve(__dirname, 'src/images/*'),
        'pages/*': path.resolve(__dirname, 'src/pages/*'),
        'styles/*': path.resolve(__dirname, 'src/styles/*'),
        'templates/*': path.resolve(__dirname, 'src/templates/*'),
        'utilities/*': path.resolve(__dirname, 'src/utilities/*'),
      }
    }
  })
}

module.exports = onCreateWebpackConfig
