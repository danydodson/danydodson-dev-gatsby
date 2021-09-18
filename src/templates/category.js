import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Paging } from '../components'
import { getColor } from '../utils'
import { useSiteMetadata } from '../hooks'
import { Helmet } from 'react-helmet'

// site.com/category/<category>

const CategoryTemplate = ({ data, pageContext, location }) => {

  const { title, subtitle } = useSiteMetadata()
  const { categories, category, currentPage, hasPrev, prevPath, hasNext, nextPath } = pageContext

  const { edges } = data.allMarkdownRemark

  const categoryColor = getColor({ categories, category })

  const pageTitle = currentPage > 0
    ? `${category} - Page ${currentPage} - ${title}`
    : `${category} - ${title}`

  return (
    <Layout title={pageTitle} description={subtitle} location={location}>
      
      <Helmet title={`Category: ${category}`} />

      <StyledCategoryContent>

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

      </StyledCategoryContent>
    </Layout>
  )
}

export const query = graphql`
  query CategoryPage($category: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { category: { eq: $category } template: { eq: "post" } draft: { ne: true } } }
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

CategoryTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object,
}

export default CategoryTemplate

const StyledCategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0 0 0;
`

const StyledCategoryLink = styled.span`
  background-color: var(--${props => props.categoryColor});
`