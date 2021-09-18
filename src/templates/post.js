import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout } from '../components'

const PostTemplate = ({ data, pageContext, location }) => {
  
  // console.log(JSON.stringify(data, null, 2))

  // const { html: pageBody } = data.markdownRemark
  // const { html } = data.markdownRemark.post.html
  // const { tagSlugs, slug, categorySlug } = post.fields
  // const { tags, date, category } = post.frontmatter

  // let { title } = post.frontmatter
  // let externalLink = null

  // const categoryColor = getColor({ allCategories, category })

  return (
    <Layout location={location}>
      Post Page
      {/* <div dangerouslySetInnerHTML={{ __html: pageBody }} /> */}
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
        categorySlug
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
`

PostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object,
}

export default PostTemplate
