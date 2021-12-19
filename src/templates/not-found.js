import React from 'react'
import { Layout } from '../components'
import PropTypes from 'prop-types'

// site.com/404

const NotFoundTemplate = ({ location }) => (
  <Layout location={location}>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

NotFoundTemplate.propTypes = {
  location: PropTypes.object
}

export default NotFoundTemplate
