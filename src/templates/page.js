import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'

// site.com/<page>

const PageTemplate = ({ data }) => {
  const { html: pageBody } = data.markdownRemark

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: pageBody }} />
    </Layout>
  )
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`

export default PageTemplate
