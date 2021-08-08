import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles'
import { Head, Nav } from '../components'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]')
}

function Layout({ children, location }) {
  return (
    <>
      <Head />
      <div id='root'>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledContent>
            <Nav />
            <div id='content'>
              {children}
            </div>
          </StyledContent>
        </ThemeProvider>
      </div>
    </>
  )
}

export default Layout

const StyledContent = styled.div``
