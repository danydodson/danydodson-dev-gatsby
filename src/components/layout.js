import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles'

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        {children}
      </main>
    </ThemeProvider>
  )
}

export default Layout
