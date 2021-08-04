import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'
// import Feed from '../components/Feed'

const IndexTemplate = ({ data, pageContext }) => {
  const { } = pageContext
  const { edges } = data.allMarkdownRemark
  
  console.log(JSON.stringify(edges, null, 2))
  
  return (
    <Layout>
      {/* <Feed
        edges={edges
          .filter(edge => edge?.node?.frontmatter?.priority)
          .sort(
            (edge1, edge2) =>
              edge2?.node?.frontmatter?.priority - edge1?.node?.frontmatter?.priority
          )}
        allCategories={allCategories}
      />
      <Feed
        edges={edges.filter(edge => !edge?.node?.frontmatter?.priority)}
        allCategories={allCategories}
      /> */}
    </Layout>
  )
}

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
          fields {
            slug
            categorySlug
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

export default IndexTemplate
