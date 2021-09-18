import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout } from '../components'

// site.com/tags

const TagsTemplate = ({ data, location }) => {
  const tags = data.allMarkdownRemark.group

  return (
    <Layout location={location}>
      <p>
        Tags list Page
      </p>
      <ul>
        {tags.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tag/${tag.fieldValue}`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query TagsList {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

TagsTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export default TagsTemplate
