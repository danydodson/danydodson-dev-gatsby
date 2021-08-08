const path = require('path')
const siteConfig = require('../../data/config')

const { getAllCategories } = require('../constants/categories.js')

module.exports = async (graphql, actions) => {
  const { createPage } = actions

  const allCategories = await getAllCategories(graphql)

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      ) {
        totalCount
      }
    }
  `)

  const { postsPerPage } = siteConfig
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / postsPerPage)
  const postsSlug = `/posts`

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? postsSlug : `${postsSlug}/page/${i}`,
      component: path.resolve('./src/templates/posts.js'),
      context: {
        allCategories,
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? postsSlug : `${postsSlug}/page/${i - 1}`,
        nextPagePath: `${postsSlug}/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    })
  }
}

