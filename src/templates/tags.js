import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { Layout } from '../components'

// site.com/tags

const TagsTemplate = ({ data, location }) => {
  const tags = data.allMarkdownRemark.group

  return (
    <Layout location={location} description={`Search posts by tag`}>

      <Helmet title={`Filter by Tag `} />
      
      <StyledTagsSection>

        <h2>All Tags</h2>

        <ul>
          {tags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tag/${tag.fieldValue}`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>

      </StyledTagsSection>
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

const StyledTagsSection = styled.section`
  padding: 100px 0 0 50px;

  h2 {
    padding-top: 20px;
  }
`