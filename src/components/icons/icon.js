import React from 'react'
import PropTypes from 'prop-types'

import { IconBookmark, IconCodepen, IconExternal, IconFolder, IconFork, IconGitHub, IconInstagram, IconLinkedin, IconLoader, IconLogo, IconStar, IconTwitter } from '.'

const Icon = ({ name }) => {
  switch (name) {
    case 'Bookmark':
      return <IconBookmark />
    case 'Codepen':
      return <IconCodepen />
    case 'External':
      return <IconExternal />
    case 'Folder':
      return <IconFolder />
    case 'Fork':
      return <IconFork />
    case 'GitHub':
      return <IconGitHub />
    case 'Instagram':
      return <IconInstagram />
    case 'Linkedin':
      return <IconLinkedin />
    case 'Loader':
      return <IconLoader />
    case 'Logo':
      return <IconLogo />
    case 'Star':
      return <IconStar />
    case 'Twitter':
      return <IconTwitter />
    default:
      return <IconStar />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon