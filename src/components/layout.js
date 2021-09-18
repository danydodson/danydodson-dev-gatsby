import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle, theme } from '../styles'
import styled, { ThemeProvider } from 'styled-components'
import { Head, Nav, Social, Email, Loader, Footer } from '../components'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]')
}

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome)

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'))
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer')
          link.setAttribute('target', '_blank')
        }
      })
    }
  }

  useEffect(() => {
    if (isLoading) {
      return
    }

    if (location.hash) {
      const id = location.hash.substring(1) // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView()
          el.focus()
        }
      }, 0)
    }

    handleExternalLinks()
  }, [isLoading, location.hash])

  return (
    <>
      <Head />
      <div id='root'>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <a className='skip-to-content' href='#content'>
            Skip to Content
          </a>
          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent id='content'>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />
              <StyledMain>
                {children}
              </StyledMain>
              <Footer />
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout

const StyledContent = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* min-height: 100vh; */
`

const StyledMain = styled.main`
  counter-reset: section;
  /* min-height: 100vh; */
`