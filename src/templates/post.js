import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components'

const PostTemplate = ({ data, pageContext }) => {
  
  // console.log(JSON.stringify(data, null, 2))
  
  // const { html: pageBody } = data.markdownRemark
  // const { html } = data.markdownRemark.post.html
  // const { tagSlugs, slug, categorySlug } = post.fields
  // const { tags, date, category } = post.frontmatter

  // let { title } = post.frontmatter
  // let externalLink = null

  // const categoryColor = getCategoryColor({ allCategories, category })

  return (
    <Layout>
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
        date
        description
        category
        tags
      }
    }
  }
`

export default PostTemplate
