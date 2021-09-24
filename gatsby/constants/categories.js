const CATEGORY_COLORS = ['pink', 'green', 'indigo', '#dbedff', 'yellow', 'red', 'purple', 'teal', 'orange']
const CATEGORY_COLOR_EXTRA = 'grey'

module.exports = {
  CATEGORY_COLORS,
  CATEGORY_COLOR_EXTRA,

  getCategories: async graphql => {
    const {
      data: {
        allMarkdownRemark: { group }
      }
    } = await graphql(`
      query CategoriesListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `)

    return group.map((cat, i) => ({
      ...cat,
      color: CATEGORY_COLORS[i] || CATEGORY_COLOR_EXTRA
    }))
  }
}
