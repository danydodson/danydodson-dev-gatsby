module.exports = {

  getTags: async graphql => {
    const {
      data: {
        allMarkdownRemark: { group }
      }
    } = await graphql(`
      query TagListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `)

    return group.map((tag, i) => ({
      ...tag
    }))

  }
}
