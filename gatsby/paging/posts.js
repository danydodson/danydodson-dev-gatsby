const path = require('path');
const siteConfig = require('../../src/config');

const { getCategories } = require('../constants/categories.js');
const { getTags } = require('../constants/tags');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const categories = await getCategories(graphql);
  const tags = await getTags(graphql);

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      ) {
        totalCount
      }
    }
  `);

  const { postsPerPage } = siteConfig;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / postsPerPage);
  const postsSlug = `/posts`;

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? postsSlug : `${postsSlug}/page/${i}`,
      component: path.resolve('./src/templates/posts.js'),
      context: {
        tags,
        categories,
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPath: i <= 1 ? postsSlug : `${postsSlug}/page/${i - 1}`,
        nextPath: `${postsSlug}/page/${i + 1}`,
        hasPrev: i !== 0,
        hasNext: i !== numPages - 1,
      },
    });
  }
};
