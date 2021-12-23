module.exports = {
  projects: {
    app: {
      schema: ['.cache/schema.gql', '.cache/schema.graphql'],
      documents: ['**/**/*.{graphql,js,ts,jsx,tsx}', '.cache/fragments.graphql'],
      extensions: {
        endpoints: {
          default: {
            url: 'http://localhost:8000/___graphql'

          }
        }
      }
    }
  }
}
