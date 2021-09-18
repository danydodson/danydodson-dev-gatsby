import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout } from '../components'

// site.com/categories

const CategoriesTemplate = ({ data, location }) => {
  const categories = data.allMarkdownRemark.group

  return (
    <Layout location={location}>
      <p>
        Catagories list Page
      </p>
      <ul>
        {categories.map(category => (
          <li key={category.fieldValue}>
            <Link to={`/category/${category.fieldValue}/`}>
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query CategoriesList {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`

CategoriesTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export default CategoriesTemplate
