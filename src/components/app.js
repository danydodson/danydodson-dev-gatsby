import React from 'react'
import PropTypes from 'prop-types'

function App({ children }) {
  return (
    <main className={mainStyles}>
      {children}
    </main>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired,
}

export default App

const mainStyles = {
  maxWidth: 320,
  counterReset: 'section',
}