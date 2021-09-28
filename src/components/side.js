/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { loadDelay } from '../utilies'

const Side = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), loadDelay)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledSide orientation={orientation}>
      <TransitionGroup component={null}>

        {isMounted && (
          <CSSTransition classNames={isHome ? 'fade' : ''} timeout={isHome ? loadDelay : 0}>
            {children}
          </CSSTransition>
        )}

      </TransitionGroup>
    </StyledSide>
  )
}

Side.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  orientation: PropTypes.string,
}

export default Side

const StyledSide = styled.aside`
  z-index: 10;
  bottom: 0;
  width: 40px;
  position: fixed;
  
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};

  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`