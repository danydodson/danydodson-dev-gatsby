// import * as React from 'react'
import PropTypes from 'prop-types'

const getContactHref = (name, contact) => {
  switch (name) {
    case 'email':
      return `mailto:${contact}`
    case 'github':
      return `https://github.com/${contact}`
    case 'instagram':
      return `https://instagram.com/${contact}/`
    case 'linkedin':
      return `https://www.linkedin.com/in/${contact}/`
    case 'twitter':
      return `https://www.twitter.com/${contact}`
    default:
      return contact
  }
}

getContactHref.propTypes = {
  name: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
}

export default getContactHref
