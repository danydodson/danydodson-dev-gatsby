module.exports = {
  getCategories: async graphql => {
    const {
      data: {
        allMarkdownRemark: { group },
      },
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
    `);

    return group.map(cat => ({
      ...cat,
    }));
  },
};
