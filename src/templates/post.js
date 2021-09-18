import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import { Layout } from '../components'

// site.com/posts/<post>

const PostTemplate = ({ data, pageContext, location }) => {
  const { html: pageBody } = data.markdownRemark
  const frontmatter = data.markdownRemark.frontmatter

  const { title, cover, alt, date, description, category, tags } = frontmatter
  
  const image = getImage(cover)

  return (
    <Layout location={location}>

      <Helmet title={`Post: ${title} `} description={description} />

      <StyledPostSection>
        <article>

          <h2>{title}</h2>

          <time>{date}</time>

          <GatsbyImage image={image} alt={alt} />

          <p>{description}</p>

          {tags && tags.map((tag, i) => {
            return (
              <h6 key={i}>
                <Link to={`/tag/${tag}`}>{tag}</Link>
              </h6>
            )
          })}

          <h6>
            <Link to={`/category/${category}`}>{category}</Link>
          </h6>

          <div dangerouslySetInnerHTML={{ __html: pageBody }} />

        </article>
      </StyledPostSection>

    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      html
      fields {
        slug
        categorySlug
        tagSlugs
      }
      frontmatter {
        title
        cover {
          childImageSharp {
            gatsbyImageData
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
`

PostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object,
}

export default PostTemplate

const StyledPostSection = styled.section`
  padding: 100px 0 0 50px;
`