import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const Page = props => {
  const page = props.data.page

  return (
    <Layout location={props.location}>
      {/* {page.body} */}
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query($slug: String!) {
    page: allMarkdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
    }
  }
`
