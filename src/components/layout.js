import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { Styles, theme } from '../styles'
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
          <Styles />

          <a className='skip-to-content' href='#content'>
            Skip to Content
          </a>

          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <StyledContent>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />

              <main id='content' className='fillHeight'>
                {children}
              </main>

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
  main {
    counter-reset: section;
  }
`
