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
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  result.data.allMarkdownRemark.group.map(tag => {
    const numPages = Math.ceil(tag.totalCount / postsPerPage);
    const tagSlug = `/tag/${tag.fieldValue}`;

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? tagSlug : `${tagSlug}/page/${i}`,
        component: path.resolve('./src/templates/tag.js'),
        context: {
          tag: tag.fieldValue,
          tags,
          categories,
          currentPage: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPath: i <= 1 ? tagSlug : `${tagSlug}/page/${i - 1}`,
          nextPath: `${tagSlug}/page/${i + 1}`,
          hasPrev: i !== 0,
          hasNext: i !== numPages - 1,
        },
      });
    }
    return null;
  });
};
