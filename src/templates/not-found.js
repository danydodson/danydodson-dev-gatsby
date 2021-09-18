import React from 'react'
import { Layout } from '../components'

// site.com/404

const NotFoundTemplate = ({ location }) => {
  return (
    <Layout location={location}>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundTemplate
