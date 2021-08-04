import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'

const PostTemplate = ({ data, pageContext }) => {

  return (
    <Layout>
      Post Page
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
        categorySlug
      }
      frontmatter {
        title
        date
        description
        category
        tags
      }
    }
  }
`

export default PostTemplate
