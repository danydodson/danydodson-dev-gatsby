import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { handleLinks } from '../utils'
import { ThemeProvider } from 'styled-components'
import { Styles, theme } from '../styles'

import { Head, Nav, Social, Email, Loader, Footer } from '../components'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]')
}

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) {
      return
    }

    handleLinks(location)
  })

  return (
    <>
      <Head />
      <div id='root'>
        <ThemeProvider theme={theme}>
          <Styles />
          <a className='skip-to-content' href='#content'>Skip to Content</a>
          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : (
            <div className='layout'>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome} />
              {children}
              <Footer />
            </div>
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

