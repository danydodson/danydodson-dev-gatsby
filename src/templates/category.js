import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'

const CategoryTemplate = ({ data, pageContext }) => {
  const { } = pageContext
  const { edges } = data.allMarkdownRemark
  
  // console.log(JSON.stringify(edges, null, 2))
  
  return (
    <Layout>
      Category Page
    </Layout>
  )
}

export const query = graphql`
  query CategoryPage($category: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: {
        frontmatter: {
          category: { eq: $category }
          template: { eq: "post" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            categorySlug
            slug
            tagSlugs
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
    }
  }
`

export default CategoryTemplate
