import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Projects, Jobs } from '../components'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <MainContainer>
      <Projects />
      <Jobs />
    </MainContainer>
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage

const MainContainer = styled.main`
  backgroundColor: #000;
`