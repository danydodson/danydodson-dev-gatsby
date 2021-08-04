import React from 'react'
import PropTypes from 'prop-types'

import {
  IconExternal,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconRss,
  IconTwitter
} from '../components/icons'

const getIcon = (name) => {
  switch (name) {
    case 'external':
      return <IconExternal />
    case 'gitHub':
      return <IconGitHub />
    case 'instagram':
      return <IconInstagram />
    case 'linkedin':
      return <IconLinkedin />
    case 'rss':
      return <IconRss />
    case 'twitter':
      return <IconTwitter />
    default:
      return <IconExternal />
  }
}

getIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default getIcon