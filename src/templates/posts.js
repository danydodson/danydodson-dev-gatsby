import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { Layout, Head, Paging } from 'components'

// site.com/posts

const PostTemplate = ({ data, pageContext, location }) => {

  const { categories, currentPage, hasPrev, prevPath, hasNext, nextPath } = pageContext
  const { edges } = data.allMarkdownRemark

  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} ` : `Posts `

  return (
    <Layout location={location}>
      <Head title={pageTitle} />

      <StyledPostsSection>
        {currentPage > 0 ? <h2>Posts Archive: Page - {currentPage}</h2> : <h3>Posts Archive </h3>}

        <ul>
          {edges.map((edge, i) => (
            <li key={i}>
              <Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>

        <h2>All Categories</h2>

        <ul>
          {categories.map((category, i) => (
            <li key={i}>
              <Link to={`/category/${category.fieldValue}`}>{category.fieldValue}</Link>
            </li>
          ))}
        </ul>

        <Paging prevPath={prevPath} nextPath={nextPath} hasPrev={hasPrev} hasNext={hasNext} />
      </StyledPostsSection>
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object
}

export const PostsQuery = graphql`
  query ($postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
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
  }
`

export default PostTemplate

const StyledPostsSection = styled.section`
  padding: 100px 0 0 50px;

  h2 {
    padding-top: 20px;
  }
`
