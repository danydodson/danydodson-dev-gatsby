import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'
// import Feed from '../components/Feed'
// import Page from '../components/Page'
import Pagination from '../components/pagination'
import { useSiteMetadata } from '../hooks'

const CategoryTemplate = ({ pageContext }) => {

  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata()

  const {
    category,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
    allCategories
  } = pageContext

  // const { edges } = data.allMarkdownRemark

  // console.log(JSON.stringify(edges, null, 2))

  const pageTitle =
    currentPage > 0
      ? `${category} - Page ${currentPage} - ${siteTitle}`
      : `${category} - ${siteTitle}`


  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      Category Page: ({category})
      <Pagination
        prevPagePath={prevPagePath}
        nextPagePath={nextPagePath}
        hasPrevPage={hasPrevPage}
        hasNextPage={hasNextPage} />
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

