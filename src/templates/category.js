import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components'
import Pagination from '../components/pagination'
// import getCategoryColor from '../utils/get-category-color'
import { useSiteMetadata } from '../hooks'

// site.com/category/<category>

const CategoryTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata()
  const { category, currentPage, prevPagePath, nextPagePath, hasPrevPage, hasNextPage, allCategories } = pageContext
  const { edges } = data.allMarkdownRemark
  // const categoryColor = getCategoryColor({ allCategories, category })

  // console.log(JSON.stringify(edges, null, 2))

  const pageTitle =
    currentPage > 0
      ? `${category} - Page ${currentPage} - ${siteTitle}`
      : `${category} - ${siteTitle}`

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      Category Page: ({category})

      <ul>
        <li>page: ({currentPage})</li>
        {edges.map((edge, i) => {
          return (
            <li key={i}>
              <Link to={`${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link>
            </li>
          )
        })}
      </ul>

      <ul>
        <li>all categories:</li>
        {allCategories.map((category, i) => {
          return (
            <li key={i}>
              <span>title: </span>
              <Link to={`/category/${category.fieldValue}`}>{category.fieldValue}</Link>
            </li>
          )
        })}
      </ul>

      <Pagination
        prevPagePath={prevPagePath}
        nextPagePath={nextPagePath}
        hasPrevPage={hasPrevPage}
        hasNextPage={hasNextPage} />

    </Layout >
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

