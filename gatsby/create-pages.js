const path = require('path')
const createCategoriesPages = require('./pagination/categories.js')
const createTagsPages = require('./pagination/tags.js')
const createPostsPages = require('./pagination/posts.js')

const { getAllCategories } = require('./constants/categories')

const createPages = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions
  const allCategories = await getAllCategories(graphql)

  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found.js')
  })

  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list.js'),
    context: {
      allCategories
    }
  })

  createPage({
    path: '/categories',
    component: path.resolve('./src/templates/categories-list.js'),
    context: {
      allCategories
    }
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
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  reporter.success(JSON.stringify(result, null, 2))

  console.log(process.env.ALGOLIA_API_KEY)

  const { edges } = result.data.allMarkdownRemark

  edges.map(edge => {
    if (
      edge &&
      edge.node &&
      edge.node.frontmatter &&
      edge.node.frontmatter.template &&
      edge.node.frontmatter.template === 'page'
    ) {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/page.js'),
        context: {
          slug: edge.node.fields.slug,
          allCategories
        }
      })
    } else if (
      edge &&
      edge.node &&
      edge.node.frontmatter &&
      edge.node.frontmatter.template &&
      edge.node.frontmatter.template === 'post'
    ) {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve('./src/templates/post.js'),
        context: {
          slug: edge.node.fields.slug,
          allCategories
        }
      })
    }

    return null
  })

  await createTagsPages(graphql, actions)
  await createCategoriesPages(graphql, actions)
  await createPostsPages(graphql, actions)
}

module.exports = createPages
