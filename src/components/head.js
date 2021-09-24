import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation()

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          defaultImage: image
          siteUrl
          username
        }
      }
    }`,
  )

  const { defaultTitle, defaultDescription, defaultImage, siteUrl, username } = site.siteMetadata

  const seo = { title: title || defaultTitle, description: description || defaultDescription, image: `${siteUrl}${image || defaultImage}`, url: `${siteUrl}${pathname}` }

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s ${defaultTitle}`}>
      <html lang='en' />

      <meta name='image' content={seo.image} />
      <meta name='description' content={seo.description} />

      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:type' content='website' />

      <meta property='fb:app_id' content='478714590211729' />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:creator' content={username} />
      <meta property='twitter:title' content={seo.title} />
      <meta property='twitter:description' content={seo.description} />
      <meta property='twitter:image' content={seo.image} />
      <meta property="twitter:url" content={seo.url} />
      
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}

Head.defaultProps = {
  title: null,
  description: null,
  image: null
}

export default Head
