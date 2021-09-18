import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { email } from '../../data/config'
import { Side } from '../components'

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation='right'>
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
)

Email.propTypes = {
  isHome: PropTypes.bool,
}

export default Email

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--grey_400);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--ff_mono);
    font-size: var(--fz_xxs);
    line-height: var(--fz_lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
  }
`
