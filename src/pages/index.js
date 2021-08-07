import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Projects } from '../components'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <MainContainer>
      <Projects />
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