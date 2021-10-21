import PropTypes from 'prop-types'
import React from 'react'
import { Hero, Layout } from '../components'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <main id="content">
      <Hero />
      {/* <About />
      <Featured />
      <Projects />
      <Jobs />
      <Posts />
      <Contact /> */}
    </main>
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage
