import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Layout, Paging } from '../components'
import config from '../../data/config'

// site.com/tag/<tag>

const TagTemplate = ({ data, pageContext, location }) => {

  const { tag, categories, currentPage, hasPrev, prevPath, hasNext, nextPath } = pageContext
  const pageTitle = currentPage > 0 ? `#${tag} - Page ${currentPage}` : `#${tag}`
  const { edges } = data.allMarkdownRemark

  return (
    <Layout location={location}>
      <Helmet title={`${pageTitle}`} description={`${config.description}`} />
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
        {categories.map((category, i) => {
          return (
            <li key={i}>
              <Link to={`/category/${category.fieldValue}`}>{category.fieldValue}</Link>
            </li>
          )
        })}
      </ul>

      <Paging prevPath={prevPath} nextPath={nextPath} hasPrev={hasPrev} hasNext={hasNext} />

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
      filter: { frontmatter: { tags: { in: [$tag] } template: { eq: "post" } draft: { ne: true } } }
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
            date(formatString: "MMM D YYYY")
            description
            category
            tags
            cover {
              childImageSharp {
                gatsbyImageData(width: 200)
              }
            }
          }
        }
      }
    }
  }
`

TagTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object,
}

export default TagTemplate
