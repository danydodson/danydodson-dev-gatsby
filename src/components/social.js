import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Side } from '../components'
import { Icon } from '../components/icons'
import { socialLinks } from '../config'

const Social = ({ isHome }) => (
  <Side isHome={isHome} orientation='left'>
    <StyledSocials>
      {socialLinks &&
        socialLinks.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name}>
              <Icon name={name} />
            </a>
          </li>
        ))}
    </StyledSocials>
  </Side>
)

Social.propTypes = {
  isHome: PropTypes.bool
}

export default Social

const StyledSocials = styled.ul`
  list-style: none;
  ${({ theme }) => theme.mixins.flexColumn};

  &:after {
    width: 1px;
    height: 90px;
    display: block;
    content: '';
    margin: 0 auto;
    background-color: var(--_grey-2);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }
    a {
      padding: 10px;
      color: var(--_grey-2);
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }
    }
  }
`
