import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { Layout, Head, Paging } from '../components'
import { getColor } from '../utils'

// site.com/category/<category>

const CategoryTemplate = ({ data, pageContext, location }) => {
  const { categories, category, currentPage, hasPrev, prevPath, hasNext, nextPath } = pageContext
  const { edges } = data.allMarkdownRemark

  // const description = edges.map(edge => edge.node.fields.description)

  const categoryColor = getColor({ categories, category })

  const pageTitle = currentPage > 0
    ? `Category: ${category} - Page ${currentPage} `
    : `Category: ${category} `

  return (
    <Layout location={location}>

      <Head title={pageTitle} />

      <StyledCategorySection>

        <h2>Category Page: ({category})</h2>

        <ul>
          {edges.map((edge, i) => {
            return (
              <li key={i}>
                <Link to={`${edge.node.fields.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            )
          })}
        </ul>

        <h2>all categories:</h2>

        <ul>
          {categories.map((category, i) => {
            return (
              <li key={i}>
                <span>title: </span>
                <Link to={`/category/${category.fieldValue}`}>
                  <StyledCategoryLink categoryColor={categoryColor}>
                    {category.fieldValue}
                  </StyledCategoryLink>
                </Link>
              </li>
            )
          })}
        </ul>

        <Paging prevPath={prevPath} nextPath={nextPath} hasPrev={hasPrev} hasNext={hasNext} />

      </StyledCategorySection>

    </Layout>
  )
}

export const CategoryQuery = graphql`
  query($category: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { category: { eq: $category } template: { eq: "post" } draft: { ne: true } } }
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

CategoryTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object,
}

export default CategoryTemplate

const StyledCategorySection = styled.section`
  padding: 100px 0 0 50px;

  h2 {
    padding-top: 20px;
  }
`

const StyledCategoryLink = styled.span`
  background-color: var(--${props => props.categoryColor});
`