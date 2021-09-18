const CATEGORY_COLORS = ['pink_100', 'green_100', 'indigo_100', 'blue_100', 'yellow_100', 'red_100', 'purple_100', 'teal_100', 'orange_100']
const CATEGORY_COLOR_EXTRA = 'grey_100'

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
      categoryColor: CATEGORY_COLORS[i] || CATEGORY_COLOR_EXTRA
    }))
  }
}
