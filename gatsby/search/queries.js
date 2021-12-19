const escapeStringRegexp = require('escape-string-regexp')

const pagePath = `content/posts`
const indexName = `Content`

const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
    }
  ) {
    edges {
      node {
        id
        fields {
          slug
        }
        internal {
          content
        }
        frontmatter {
          title
          cover {
            childImageSharp {
              gatsbyImageData(width: 700)
            }
          }
          date(formatString: "MMM D YYYY")
          description
          category
          tags
        }
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, fields, internal, frontmatter, ...rest } }) {
  return {
    objectID: id,
    ...fields,
    ...internal,
    ...frontmatter,
    ...rest
  }
}

const queries = [
  {
    query: pageQuery,
    indexName,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    settings: { attributesToSnippet: [`excerpt:20`] }
  }
]

module.exports = queries
