import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Head, Paging } from '../components'

// site.com/tag/<tag>

const TagTemplate = ({ data, pageContext, location }) => {

  const { tag, categories, currentPage, hasPrev, prevPath, hasNext, nextPath } = pageContext
  const { edges } = data.allMarkdownRemark

  const pageTitle = currentPage > 0
    ? `Tagged: #${tag} - Page ${currentPage} `
    : `Tagged: #${tag} `

  return (
    <Layout location={location}>

      <Head title={pageTitle} />

      <StyledTagSection>

        {currentPage > 0
          ? (<h2>Tag: {`#${tag} - Page ${currentPage}`}</h2>)
          : (<h2>Tag: {`#${tag}`}</h2>)
        }

        <ul>
          {edges.map((edge, i) => {
            return (
              <li key={i}>
                <Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
              </li>
            )
          })}
        </ul>

        <h2>all categories:</h2>

        <ul>
          {categories.map((category, i) => {
            return (
              <li key={i}>
                <Link to={`/category/${category.fieldValue}`}>
                  {category.fieldValue}
                </Link>
              </li>
            )
          })}
        </ul>

        <Paging prevPath={prevPath} nextPath={nextPath} hasPrev={hasPrev} hasNext={hasNext} />

      </StyledTagSection>

    </Layout>
  )
}

export const TagQuery = graphql`
  query($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
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
            cover {
              childImageSharp {
                gatsbyImageData(width: 700)
              }
            }
            alt
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

TagTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object,
}

export default TagTemplate

const StyledTagSection = styled.section`
  padding: 100px 0 0 50px;

  h2 {
    padding-top: 20px;
  }
`