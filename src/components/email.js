import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Side } from '../components'
import { email } from '../../data/config'

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation='right'>
    <StyledEmail>
      <a rel='preload' href={`mailto:${email}`}>{email}</a>
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
    background-color: var(--grey-200);
  }
  
  a {
    margin: 30px auto;
    letter-spacing: 0.1em;
    color: var(--grey-200);
    font-size: var(--fz-sm);
    font-family: var(--ff-mono);
    font-weight: var(--fw-md);
    line-height: var(--lh-lg);
    writing-mode: vertical-rl;
    &:hover,
    &:focus {
      color: var(--grey-200);
      transform: translateY(-3px);
    }
  }
`
