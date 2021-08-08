import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components'
import Pagination from '../components/pagination'
import { useSiteMetadata } from '../hooks'

// site.com/tag/<tag>

const TagTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata()
  const { tag, currentPage, prevPagePath, nextPagePath, hasPrevPage, hasNextPage, allCategories } = pageContext
  const { edges } = data.allMarkdownRemark
  
  // console.log(JSON.stringify(pageContext, null, 2))

  const pageTitle =
    currentPage > 0
      ? `${tag} - Page ${currentPage} - ${siteTitle}`
      : `${tag} - ${siteTitle}`

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      Tag Page: ({tag})

      <ul>
        <li>page: ({currentPage})</li>
        {edges.map((edge, i) => {
          return (
            <li key={i}>
              <span>title: </span>
              <Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
            </li>
          )
        })}
      </ul>

      <ul>
        <li>all categories:</li>
        {allCategories.map((category, i) => {
          return (
            <li key={i}>
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
