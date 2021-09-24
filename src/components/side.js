/* eslint-disable */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { loaderDelay } from '../constants'

const Side = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledSideElement orientation={orientation}>

      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames={isHome ? 'fade' : ''} timeout={isHome ? loaderDelay : 0}>
            {children}
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledSideElement>
  )
}

Side.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  orientation: PropTypes.string,
}

export default Side

const StyledSideElement = styled.aside`
  width: 40px;
  bottom: 0;
  position: fixed;
  color: var(--grey);
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;

  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`