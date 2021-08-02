import * as React from 'react'
import PropTypes from 'prop-types'

import { Layout, App } from '../components'

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <App />
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
