const path = require('path')

const createCategoriesPages = require('./paging/categories.js')
const createTagsPages = require('./paging/tags.js')
const createPostsPages = require('./paging/posts.js')

const { getCategories } = require('./constants/categories')
const { getTags } = require('./constants/tags')

const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const categories = await getCategories(graphql)
  const tags = await getTags(graphql)

  // site.com/404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found.js'),
  })

  // site.com/tags
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags.js'),
    context: {
      categories,
      tags,
    },
  })

  // site.com/categories
  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories.js'),
    context: {
      categories,
      tags,
    },
  })

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  // reporter.success(JSON.stringify(result, null, 2))

  const { edges } = result.data.allMarkdownRemark

  edges.map((edge) => {
    if (
      edge &&
      edge.node &&
      edge.node.frontmatter &&
      edge.node.frontmatter.template &&
      edge.node.frontmatter.template === 'post'
    ) {
      // site.com/post/<post>
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/post.js'),
        context: {
          slug: `${edge.node.fields.slug}`,
          categories,
          tags,
        },
      })
    }

    return null
  })

  await createTagsPages(graphql, actions)
  await createCategoriesPages(graphql, actions)
  await createPostsPages(graphql, actions)
}

module.exports = createPages
