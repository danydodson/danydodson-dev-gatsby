import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout, Paging } from '../components'
import { useSiteMetadata } from '../hooks'

// site.com/post/<post>

const PostTemplate = ({ data, pageContext, location }) => {
  
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata()
  const { post, categories, currentPage, hasPrev, prevPath, hasNext, nextPath} = pageContext

  const { edges } = data.allMarkdownRemark

  // console.log(JSON.stringify(edges, null, 2))

  const pageTitle =
    currentPage > 0
      ? `${post} - Page ${currentPage} - ${siteTitle}`
      : `${post} - ${siteTitle}`

  return (
    <Layout title={pageTitle} description={siteSubtitle} location={location}>
      Post Page: ({post})

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
  query PostPage($postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { template: { eq: "post" } draft: { ne: true } } }
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

PostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object,
}

export default PostTemplate
