import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout, Head } from '../components'

// site.com/posts/<post>

const PostTemplate = ({ data, location }) => {
  const { html, frontmatter } = data.markdownRemark
  const { title, cover, date, description, category, tags } = frontmatter

  const seoImage = `${cover.childImageSharp.gatsbyImageData.images.fallback.src}`

  const image = getImage(cover)

  return (
    <Layout location={location}>
      <Head title={`Post: ${title} `} description={description} image={seoImage} />

      <StyledPostSection>
        <article>
          <h2>{title}</h2>

          <time>{date}</time>

          <GatsbyImage image={image} alt={category} />

          <p>{description}</p>

          {tags &&
            tags.map((tag, i) => (
              <h6 key={i}>
                <Link to={`/tag/${tag}`}>{tag}</Link>
              </h6>
            ))}

          <h6>
            <Link to={`/category/${category}`}>{category}</Link>
          </h6>

          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </StyledPostSection>
    </Layout>
  )
}

export const PostBySlugQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
