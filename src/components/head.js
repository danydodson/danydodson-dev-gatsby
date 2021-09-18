import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import config from '../../data/config'

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation()

  const seo = {
    title: title || config.title,
    description: description || config.description,
    image: `${config.url}${image}` || `${config.url}${config.image}`,
    url: `${config.url}${pathname}`
  }

  return (
    <Helmet
      title={title}
      description={`${description}`}
      defaultTitle={seo.title}
      titleTemplate={`%s ${config.subtitle}`}
    >
      <html lang='en' />

      <meta name='image' content={seo.image} />
      <meta name='description' content={seo.description} />

      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:type' content='website' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={config.username} />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />

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
