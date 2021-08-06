import React from 'react'
import PropTypes from 'prop-types'

import {
  IconExternal,
  IconFolder,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconRss,
  IconTwitter
} from '.'

const Icon = (name) => {
  switch (name) {
    case 'external':
      return <IconExternal />
    case 'folder':
      return <IconFolder />
    case 'gitHub':
      return <IconGitHub />
    case 'instagram':
      return <IconInstagram />
    case 'linkedin':
      return <IconLinkedin />
    case 'loader':
      return <IconLoader />
    case 'rss':
      return <IconRss />
    case 'twitter':
      return <IconTwitter />
    default:
      return <IconExternal />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon