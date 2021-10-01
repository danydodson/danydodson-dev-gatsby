const path = require('path');
const siteConfig = require('../../src/config');

const { getCategories } = require('../constants/categories.js');
const { getTags } = require('../constants/tags');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;
  const { postsPerPage } = siteConfig;

  const categories = await getCategories(graphql);
  const tags = await getTags(graphql);

  const result = await graphql(`
    {
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

  result.data.allMarkdownRemark.group.map(category => {
    const numPages = Math.ceil(category.totalCount / postsPerPage);
    const categorySlug = `/category/${category.fieldValue}`;

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? categorySlug : `${categorySlug}/page/${i}`,
        component: path.resolve('./src/templates/category.js'),
        context: {
          category: category.fieldValue,
          categories,
          tags,
          current: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPath: i <= 1 ? categorySlug : `${categorySlug}/page/${i - 1}`,
          nextPath: `${categorySlug}/page/${i + 1}`,
          hasPrev: i !== 0,
          hasNext: i !== numPages - 1,
        },
      });
    }
    return null;
  });
};
