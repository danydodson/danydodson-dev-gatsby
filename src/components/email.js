import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Side } from '../components'
import { email } from '../../data/config'

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation='right'>
    <StyledEmail>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledEmail>
  </Side>
)

Email.propTypes = {
  isHome: PropTypes.bool,
}

export default Email

const StyledEmail = styled.div`
  ${({ theme }) => theme.mixins.flexColumn};

  &:after {
    width: 1px;
    height: 90px;
    content: '';
    margin: 0 auto;
    display: block;
    background-color: var(--_grey-2);
  }
  
  a {
    margin: 30px auto;
    letter-spacing: 0.1em;
    font-weight: 500;
    color: var(--_grey-2);
    font-size: var(--sm);
    font-family: var(--mono);
    writing-mode: vertical-rl;
    &:hover,
    &:focus {
      color: var(--_grey-2);
      transform: translateY(-3px);
    }
  }
`
