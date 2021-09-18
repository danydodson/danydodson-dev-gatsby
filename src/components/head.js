import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation()

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defTitle: title
            defSubtitle: subtitle
            defDescription: description
            defImage: image
            siteUrl
            username
          }
        }
      }
    `,
  )

  const { defTitle, defSubtitle, defDescription, defImage, siteUrl, username } = site.siteMetadata

  const seo = { title: title || defTitle, description: description || defDescription, image: `${siteUrl}/${image || defImage}`, url: `${siteUrl}${pathname}` }

  return (
    <Helmet
      title={title}
      description={seo.description}
      defaultTitle={seo.title}
      titleTemplate={`%s ${defSubtitle}`}
    >
      <html lang='en' />

      <meta name='image' content={seo.image} />
      <meta name='description' content={seo.description} />

      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:type' content='website' />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:creator' content={username} />
      <meta property='twitter:title' content={seo.title} />
      <meta property='twitter:description' content={seo.description} />
      <meta property='twitter:image' content={seo.image} />
      <meta property="twitter:url" content={seo.url} />

      <meta name='google-site-verification' content='whbkucPDSVYylDtYbIwY01GS0fNHCwhQ2ujuAXd1m_Y' />
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
