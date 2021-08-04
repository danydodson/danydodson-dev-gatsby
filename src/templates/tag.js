import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'

const TagTemplate = ({ data, pageContext }) => {
  const { } = pageContext
  const { edges } = data.allMarkdownRemark

  // console.log(JSON.stringify(edges, null, 2))

  return (
    <Layout >
      Tag Page
    </Layout>
  )
}

export const query = graphql`
  query TagPage($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: {
          tags: { in: [$tag] }
          template: { eq: "post" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
            tagSlugs
          }
          frontmatter {
            title
            date
            tags
            category
            description
          }
        }
      }
    }
  }
`

export default TagTemplate
